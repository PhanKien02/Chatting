import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { RegisterDto } from './dto/create-auth.dto';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import { LoginDto } from './dto/login.dto';
import { firstValueFrom, Observable } from 'rxjs';
import { IUser } from '@/interfaces/user.interface';
import { RegisterResponse } from '@/proto/auth/RegisterResponse';
import { LoginResponse } from '@/proto/auth/LoginResponse';
import { Register } from '@/proto/auth/Register';
import { Login } from '@/proto/auth/Login';
import { RefreshToken } from '@/proto/auth/RefreshToken';
import { JwtService } from '@nestjs/jwt';
import { ActiveOTPDto } from './dto/active-account';
import { status } from '@grpc/grpc-js';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { buildRedisKey, REDIS_KEY } from '@/common/redis-key';

interface GrpcAuthService {
        Register(body: Register): Observable<RegisterResponse>;
        Login(body: Login): Observable<LoginResponse>;
        FindByUserId(data: RefreshToken): Observable<IUser>;
        VerifyOTP(data: { token: string; otp: string }): Observable<IUser>;
        ResendOtp(data: RefreshToken): Observable<{ token: string }>;
        RefreshToken(data: RefreshToken): Observable<LoginResponse>;
}
@Injectable()
export class AuthService implements OnModuleInit {
        private authService: GrpcAuthService;
        constructor(
                @Inject('AUTH_PACKAGE') private readonly authClient: ClientGrpc,
                private readonly jwtService: JwtService,
                @Inject(CACHE_MANAGER) private cacheManager: Cache
        ) { }
        onModuleInit() {
                this.authService = this.authClient.getService<GrpcAuthService>('AuthService');
        }
        async register(registerDto: RegisterDto) {
                const user = await firstValueFrom(this.authService.Register(registerDto));
                return user;
        }

        async login(loginDto: LoginDto): Promise<LoginResponse> {
                const user = await firstValueFrom(this.authService.Login(loginDto));
                if (user.user?.id !== undefined) {
                        await this.cacheManager.set(
                                buildRedisKey(REDIS_KEY.USER.SIGN, user.user.id),
                                user.user,
                                120 * 1000
                        );
                }
                if (user.accessToken !== undefined) {
                        await this.cacheManager.set(
                                buildRedisKey(REDIS_KEY.TOKEN.ACCESS, user.accessToken),
                                user.accessToken,
                                120 * 1000
                        );
                }
                if (user.refreshToken !== undefined && user.user?.id !== undefined) {
                        await this.cacheManager.set(
                                buildRedisKey(REDIS_KEY.TOKEN.REFRESH, user.user?.id),
                                user.refreshToken,
                                7 * 24 * 3600 * 1000
                        );
                }

                return user;
        }

        async findByUserId(id: number): Promise<IUser> {
                return await firstValueFrom(this.authService.FindByUserId({ idUser: id }));
        }

        async reSendOtp(idUser: number) {
                return await firstValueFrom(this.authService.ResendOtp({ idUser }));
        }

        async activeAccout(body: ActiveOTPDto) {
                return await firstValueFrom(this.authService.VerifyOTP(body));
        }

        async refreshToken(token: string): Promise<LoginResponse> {
                try {
                        const decode = await this.jwtService.verify(token, {
                                secret: process.env.REFRESH_TOKEN_SCRECT,
                                ignoreExpiration: false,
                        });

                        return await firstValueFrom(
                                this.authService.RefreshToken({ idUser: decode.userId })
                        );
                } catch (error) {
                        throw new RpcException({
                                message: error,
                                code: status.INVALID_ARGUMENT,
                        });
                }
        }

        async logout(id: number) {
                await this.cacheManager.del(buildRedisKey(REDIS_KEY.TOKEN.REFRESH, id));

                return true;
        }
}
