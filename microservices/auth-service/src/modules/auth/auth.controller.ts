import { Controller, Post } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/register')
  async create(@Payload() createAuthDto: RegisterDto) {
    const result = await this.authService.create(createAuthDto);
    return result;
  }

  @Post('login')
  async login(@Payload() login: LoginDto) {
    const result = await this.authService.login(login);
    return result;
  }
}
