import { Controller, Post } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @EventPattern('user-created')
  async create(@Payload() data: RegisterDto, @Ctx() context: RmqContext) {
    this.authService.create(data);
    return data;
  }

  @Post('login')
  async login(@Payload() login: LoginDto) {
    const result = await this.authService.login(login);
    return result;
  }
}
