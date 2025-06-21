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

interface GrpcUserService {
  Create(body: CreateUserDto): Observable<User>
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
