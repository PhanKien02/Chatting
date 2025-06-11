import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { RpcException } from '@nestjs/microservices';
import argon2 from 'argon2';
import { genKeyActive } from 'src/utils/gennerate-key';

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
      throw new RpcException("người dùng đã tồn tại");
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

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
