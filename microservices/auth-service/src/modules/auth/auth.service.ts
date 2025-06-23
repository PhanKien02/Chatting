import { Inject, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import * as argon2 from 'argon2';
import { genKeyActive } from 'src/utils/gennerate-key';
import { LoginDto } from './dto/login.dto';
import { errorMessage } from 'src/common/errorMessage';
import { CreateUserDto } from './dto/create-user.dto';
import { firstValueFrom, Observable } from 'rxjs';
import { User } from 'src/proto/user/User';
import { JwtService } from '@nestjs/jwt';

interface GrpcUserService {
  Create(body: CreateUserDto): Observable<User>,
  FindOne({ id }): Observable<User>
}
@Injectable()
export class AuthService {
  private userService: GrpcUserService;

  onModuleInit() {
    this.userService = this.userClient.getService<GrpcUserService>('UserService');
  }
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
    @Inject('USER_PACKAGE') private readonly userClient: ClientGrpc,
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
    if (hasUser) {
      throw new RpcException(errorMessage.USER_EXITS);
    }
    register.password = await argon2.hash(register.password);
    const newUser = this.authRepository.create({
      ...register,
      activeKey: genKeyActive(),
      isActive: false,
    });
    const createUser = {
      email: register.email,
      fullName: register.fullName,
      phone: register.phone,
      avatarUrl: register.avatarUrl,
    };
    const data = await firstValueFrom(this.userService.Create(createUser));
    if (data && data.id) {
      await this.authRepository.save({ ...newUser, idUser: +data.id });
    }
    return newUser;
  }

  async login(login: LoginDto) {
    const user = await this.authRepository.findOne({
      where: [
        { email: login.login },
        { phone: login.login },
      ]
    });
    if (!user) {
      throw new RpcException(errorMessage.LOGIN_ERROR);
    }
    const userLogin = await firstValueFrom(this.userService.FindOne
      ({ id: user.idUser }))
    const isPasswordValid = await argon2.verify(user.password, login.password);
    if (!isPasswordValid) {
      throw new RpcException(errorMessage.LOGIN_ERROR);
    }
    if (!user.isActive) {
      throw new RpcException(errorMessage.USER_NOT_ACTIVE);
    }
    const payLoadAccessToken = {
      role: user.role,
      userId: userLogin.id,
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
        id: userLogin.id,
        isActive: user.isActive,
        role: user.role,
        email: user.email,
        phone: user.phone,
        fullName: userLogin.fullName,
        avatarUrl: userLogin.avatarUrl
      },
      accessToken,
      refreshToken,
      expiresAt
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
