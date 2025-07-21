import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IUser, PayLoadToken } from '@/interfaces/user.interface';
import { AuthService } from '@/modules/auth/auth.service';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { REDIS_KEY } from '@/common/redis-key';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly authService: AuthService, @Inject(CACHE_MANAGER) private cacheManager: Cache) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.ACCESS_TOKEN_SCRECT || 'default_secret_key',
        });
    }

    async validate(payLoad: PayLoadToken): Promise<any> {
        let user: IUser;
        const key = REDIS_KEY.USER.SIGN + payLoad.userId;
        const cacheUser = await this.cacheManager.get(key) as IUser;
        if (cacheUser)
            return cacheUser
        else
            user = await this.authService.findByUserId(+payLoad.userId);
        if (!user) {
            throw new BadRequestException('Người dùng không tồn tại trong hệ thống');
        }
        if (!user.isActive) {
            throw new BadRequestException('Tài khoản người dùng đã bị khoá');
        }
        return user;
    }
}
