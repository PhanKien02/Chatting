import { BadRequestException, Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { RegisterDto } from './dto/create-auth.dto';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import { LoginDto } from './dto/login.dto';
import { firstValueFrom, Observable } from 'rxjs';
import { IUser } from '@/interfaces/user.interface';
import { RegisterResponse } from 'proto/auth/RegisterResponse';
import { LoginResponse } from 'proto/auth/LoginResponse';
import { Register } from 'proto/auth/Register';
import { Login } from 'proto/auth/Login';
import { RefreshToken } from 'proto/auth/RefreshToken';
import { JwtService } from '@nestjs/jwt';
import { ActiveOTPDto } from './dto/active-account';
import { status } from '@grpc/grpc-js';

interface GrpcAuthService {
  Register(body: Register): Observable<RegisterResponse>;
  Login(body: Login): Observable<LoginResponse>;
  FindByUserId(data: RefreshToken): Observable<IUser>;
  VerifyOTP(data: { token: string, otp: string }): Observable<IUser>
  ResendOtp(data: RefreshToken): Observable<{ token: string }>
  RefreshToken(data: RefreshToken): Observable<LoginResponse>
}
@Injectable()
export class AuthService implements OnModuleInit {
  private authService: GrpcAuthService;
  constructor(@Inject('AUTH_PACKAGE') private readonly authClient: ClientGrpc, private readonly jwtService: JwtService) { }
  onModuleInit() {
    this.authService = this.authClient.getService<GrpcAuthService>('AuthService');
  }
  async register(registerDto: RegisterDto) {
    const user = await firstValueFrom(this.authService.Register(registerDto));
    return user;
  }

  async login(loginDto: LoginDto) {
    const user = await firstValueFrom(this.authService.Login(loginDto));
    return user;
  }

  async findByUserId(id: number): Promise<IUser> {
    return await firstValueFrom(this.authService.FindByUserId({ idUser: id }))
  }

  async reSendOtp(idUser: number) {
    return await firstValueFrom(this.authService.ResendOtp({ idUser }))
  }

  async activeAccout(body: ActiveOTPDto) {
    return await firstValueFrom(this.authService.VerifyOTP(body))
  }


  async refreshToken(token: string): Promise<LoginResponse> {
    try {
      const decode = await this.jwtService.verify(token, {
        secret: process.env.REFRESH_TOKEN_SCRECT,
        ignoreExpiration: false,
      });
      return await firstValueFrom(this.authService.RefreshToken({ idUser: decode.userId }));
    } catch (error) {
      throw new RpcException({
        message: error,
        code: status.INVALID_ARGUMENT
      })
    }
  }
}