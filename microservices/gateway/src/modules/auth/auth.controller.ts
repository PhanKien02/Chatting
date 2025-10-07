import { Controller, Post, Body, Delete, Param, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/create-auth.dto';
import { LoginDto, RefreshTokenDto } from './dto/login.dto';
import { ActiveOTPDto, ReActive } from './dto/active-account';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
        constructor(private readonly authService: AuthService) { }

        @Post('/register')
        async register(@Body() createAuthDto: RegisterDto) {
                return this.authService.register(createAuthDto);
        }

        @Post('/login')
        async findAll(@Body() loginDto: LoginDto, @Res({ passthrough: true }) response: Response) {
                const result = await this.authService.login(loginDto);
                const { refreshToken, ...data } = result;
                response.cookie('refreshToken', refreshToken, {
                        httpOnly: true,       // không cho JS đọc
                        secure: true,         // chỉ https
                        sameSite: 'strict',   // chống CSRF
                        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 ngày
                });
                return data;
        }

        @Post('/active')
        activeAccout(@Body() body: ActiveOTPDto) {
                return this.authService.activeAccout(body);
        }
        @Post('/resend-active')
        resendOtpActive(@Body() body: ReActive) {
                return this.authService.reSendOtp(+body.idUser);
        }

        @Post('/refresh-token')
        async refreshToken(@Body() body: RefreshTokenDto, @Res({ passthrough: true }) response: Response) {
                const result = await this.authService.refreshToken(body.token);
                const { refreshToken, ...data } = result;
                response.cookie('refreshToken', refreshToken, {
                        httpOnly: true,       // không cho JS đọc
                        secure: true,         // chỉ https
                        sameSite: 'strict',   // chống CSRF
                        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 ngày
                });
                return data;
        }
        @Delete('/logout/:id')
        logout(@Param('id') id: number) {
                return this.authService.logout(id);
        }
}
