import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PayLoadToken } from '@/interfaces/user.interface';
import { AuthService } from '@/modules/auth/auth.service';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.ACCESS_TOKEN_SCRECT,
        });
    }

    async validate(payLoad: PayLoadToken, done: VerifiedCallback): Promise<VerifiedCallback> {
        const user = await this.authService.findByUserId(+payLoad.userId);

        if (!user) {
            return done(
                new RpcException({ code: status.UNAUTHENTICATED, message: 'Người dùng không tồn tại trong hệ thống' }),
                false,
            );
        }
        if (!user.isActive)
            return done(
                new RpcException({ code: status.INVALID_ARGUMENT, message: 'Tài khoản người dùng đã bị khoá' }),
                false,
            );
        return done(null, user);
    }
}
