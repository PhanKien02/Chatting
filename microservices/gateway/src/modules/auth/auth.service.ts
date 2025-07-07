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

interface GrpcAuthService {
  Register(body: Register): Observable<RegisterResponse>;
  Login(body: Login): Observable<LoginResponse>;
  FindByUserId(data: RefreshToken): Observable<IUser>;
  VerifyOTP(data: { token: string, otp: string }): Observable<IUser>
  ResendOtp(data: RefreshToken): Observable<{ token: string }>
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


  // async refreshToken(token: string): Promise<LoginResponse> {
  //   const decode = this.jwtService.verify(token, {
  //     secret: process.env.REFRESH_TOKEN_SCRECT,
  //   });
  //   const user = await this.validateToken(decode)
  //   const payLoadToken = {
  //     role: user.role,
  //     userId: user._id,
  //   };
  //   const now = Date.now();
  //   const accessTokenExpiresIn = process.env.ACCESS_TOKEN_EXPIRESIN ? +process.env.ACCESS_TOKEN_EXPIRESIN : 0;
  //   if (!accessTokenExpiresIn) {
  //     throw new Error('ACCESS_TOKEN_EXPIRESIN environment variable is not set');
  //   }
  //   const expiresAt = new Date(now + accessTokenExpiresIn).getTime();

  //   const accessToken = this.jwtService.sign(payLoadToken, {
  //     algorithm: 'HS256',
  //     secret: process.env.ACCESS_TOKEN_SCRECT,
  //     expiresIn: process.env.ACCESS_TOKEN_EXPIRESIN,
  //   });

  //   const refreshToken = this.jwtService.sign(
  //     payLoadToken,
  //     {
  //       algorithm: 'HS512',
  //       secret: process.env.REFRESH_TOKEN_SCRECT,
  //       expiresIn: process.env.REFRESH_TOKEN_EXPIRESIN,
  //     },
  //   );

  //   return {
  //     user,
  //     accessToken,
  //     refreshToken,
  //     expiresAt: expiresAt.toString()
  //   };
  // }
}
