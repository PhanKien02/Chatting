import { Controller, Post } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @GrpcMethod('AuthService', 'Register')
  async create(data: RegisterDto) {
    this.authService.create(data);
    return data;
  }

  @Post('login')
  async login(@Payload() login: LoginDto) {
    const result = await this.authService.login(login);
    return result;
  }
}
