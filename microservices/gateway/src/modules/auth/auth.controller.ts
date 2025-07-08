import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/create-auth.dto';
import { LoginDto, RefreshTokenDto } from './dto/login.dto';
import { ActiveOTPDto, ReActive } from './dto/active-account';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/register')
  async register(@Body() createAuthDto: RegisterDto) {
    return this.authService.register(createAuthDto);
  }

  @Post('/login')
  findAll(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
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
  refreshToken(@Body() body: RefreshTokenDto) {
    return this.authService.refreshToken(body.token);
  }


}
