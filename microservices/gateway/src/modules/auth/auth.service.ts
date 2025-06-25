import { Inject, Injectable, InternalServerErrorException, OnModuleInit } from '@nestjs/common';
import { RegisterDto } from './dto/create-auth.dto';
import { ClientGrpc } from '@nestjs/microservices';
import { LoginDto } from './dto/login.dto';
import { firstValueFrom, Observable } from 'rxjs';
import { IUser } from '@/interfaces/user.interface';
import { RegisterResponse } from 'proto/auth/RegisterResponse';
import { LoginResponse } from 'proto/auth/LoginResponse';
import { Register } from 'proto/auth/Register';
import { Login } from 'proto/auth/Login';
import { RefreshToken } from 'proto/auth/RefreshToken';

interface GrpcAuthService {
  Register(body: Register): Observable<RegisterResponse>;
  Login(body: Login): Observable<LoginResponse>;
  FindByUserId(data: RefreshToken): Observable<IUser>;
}
@Injectable()
export class AuthService implements OnModuleInit {
  private authService: GrpcAuthService;
  constructor(@Inject('AUTH_PACKAGE') private readonly authClient: ClientGrpc,) { }
  onModuleInit() {
    this.authService = this.authClient.getService<GrpcAuthService>('AuthService');
  }
  async register(registerDto: RegisterDto) {
    try {
      const user = await firstValueFrom(this.authService.Register(registerDto));
      return user;

    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async login(loginDto: LoginDto) {
    const user = await this.authService.Login(loginDto);
    return user;
  }

  async findByUserId(idUser: number) {
    const user = await firstValueFrom(this.authService.FindByUserId({ idUser }));
    return user;
  }
}
