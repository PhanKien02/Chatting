import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../modules/user/user.service';
import { PayLoadToken } from '@/interfaces/user.interface';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.ACCESS_TOKEN_SCRECT,
        });
    }

    async validate(payLoad: PayLoadToken, done: VerifiedCallback): Promise<VerifiedCallback> {
        const user = await this.userService.validateToken(payLoad);

        if (!user) {
            return done(
                new UnauthorizedException({ message: 'Người dùng không tồn tại trong hệ thống' }),
                false,
            );
        }
        if (!user.isActive)
            return done(
                new ForbiddenException({ message: 'Tài khoản người dùng đã bị khoá' }),
                false,
            );
        return done(null, user);
    }
}
