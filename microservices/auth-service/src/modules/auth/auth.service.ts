import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { RpcException } from '@nestjs/microservices';
import argon2 from 'argon2';
import { genKeyActive } from 'src/utils/gennerate-key';
import { LoginDto } from './dto/login.dto';
import { errorMessage } from 'src/common/errorMessage';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) { }
  async create(register: RegisterDto) {
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
    await this.authRepository.save(newUser);
    return newUser;
  }

  async login(login: LoginDto) {
    const hasUser = await this.authRepository.findOne({
      where: [
        { email: login.login },
        { phone: login.login },
      ]
    });
    if (!hasUser) {
      throw new RpcException(errorMessage.LOGIN_ERROR);
    }

  }
}
