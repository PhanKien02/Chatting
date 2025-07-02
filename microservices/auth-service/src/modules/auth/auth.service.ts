import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { genKeyActive } from 'src/utils/gennerate-key';
import { LoginDto } from './dto/login.dto';
import { errorMessage } from 'src/common/errorMessage';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse } from 'src/proto/auth/LoginResponse';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { RpcException } from '@nestjs/microservices';
import { IResponseRabbitmq } from 'src/interfaces/rabbitmq.interface';
import { IUser } from 'src/interfaces/user.interface';
import { status } from '@grpc/grpc-js';
import { randomUUID } from 'crypto';
@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
    private readonly amqpConnection: AmqpConnection,
    private readonly jwtService: JwtService
  ) { }
  async create(register: RegisterDto) {
    // * Check if the user already exists
    const hasUser = await this.authRepository.findOne({
      where: [
        { idUser: register.idUser },
        { email: register.email },
        { phone: register.phone },
      ]
    });
    if (hasUser) throw new RpcException('User already exists');
    const otp = genKeyActive();
    register.password = await argon2.hash(register.password);
    const newUser = this.authRepository.create({
      ...register,
      activeKey: otp,
      isActive: false,
    });
    const createUser = {
      email: register.email,
      fullName: register.fullName,
      phone: register.phone,
      avatarUrl: register.avatarUrl,
    };
    const data = await this.amqpConnection.request({
      exchange: 'user_exchange',
      routingKey: 'user.create',
      payload: Buffer.from(JSON.stringify(createUser)),
    }) as IResponseRabbitmq<IUser>;
    if (data.success == true) {
      const user = data.message as IUser;
      const tokenActive = this.jwtService.sign({
        otp,
        id: +user.id
      }, {
        algorithm: 'HS256',
        secret: process.env.ACTIVE_TOKEN,
        expiresIn: '5m'
      })
      const emailData = {
        email: register.email,
        fullName: register.fullName,
        otp,
        tokenActive
      }
      const [response] = await Promise.all([
        this.authRepository.save({ ...newUser, idUser: +user.id }),
        this.amqpConnection.publish('notification_exchanges', 'email_active', Buffer.from(JSON.stringify(emailData)))
      ]);

      return { ...response, tokenActive }
    }
    else
      throw new RpcException({
        message: data.message,
        code: status.ALREADY_EXISTS
      })
  }

  async login(login: LoginDto): Promise<LoginResponse> {
    const user = await this.authRepository.findOne({
      where: [
        { email: login.login },
        { phone: login.login },
      ]
    });
    if (!user) {
      throw new RpcException(errorMessage.LOGIN_ERROR);
    }
    if (!user.isActive) {
      throw new RpcException(errorMessage.USER_NOT_ACTIVE);
    }
    const isPasswordValid = await argon2.verify(user.password, login.password);
    if (!isPasswordValid) {
      throw new RpcException(errorMessage.LOGIN_ERROR);
    }
    const data = await this.amqpConnection.request({
      exchange: 'user_exchange',
      routingKey: 'user.find.one',
      payload: Buffer.from(JSON.stringify({ id: user.idUser })),
      correlationId: randomUUID(),
    }) as IResponseRabbitmq<IUser>;
    if (data.success == false)
      throw new RpcException({ code: status.NOT_FOUND, message: errorMessage.USER_NOT_FOUND })
    const userLogin = data.message as IUser;

    const payLoadAccessToken = {
      role: user.role,
      userId: user.idUser,
      authId: user.id,
    };
    const expiresInSeconds = 120; // 2ph
    const expiresAt = Math.floor(Date.now() / 1000) + expiresInSeconds;

    const accessToken = this.jwtService.sign(payLoadAccessToken, {
      algorithm: 'HS256',
      secret: process.env.ACCESS_TOKEN_SCRECT,
      expiresIn: expiresInSeconds,
    });

    const refreshToken = this.jwtService.sign(
      payLoadAccessToken,
      {
        algorithm: 'HS512',
        secret: process.env.REFRESH_TOKEN_SCRECT,
        expiresIn: '30d', // 30 ngày
      },
    );

    return {
      user: {
        id: userLogin.id.toString(),
        isActive: user.isActive,
        role: user.role,
        email: user.email,
        phone: user.phone,
        fullName: userLogin.fullName,
        avatarUrl: userLogin.avatarUrl
      },
      accessToken,
      refreshToken,
      expiresAt: expiresAt.toString()
    };
  }


  async findByUserId(idUser: number) {
    const data = await this.authRepository.findOne({
      where: {
        idUser: idUser
      }
    })
    return data;
  }
}
