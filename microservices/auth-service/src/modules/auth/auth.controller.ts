import { Controller, Post } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @MessagePattern('user_created')
  async create(@Payload() data: RegisterDto, @Ctx() context: RmqContext) {
    console.log('Received message:', data);
    console.log(`Pattern: ${context.getPattern()}`);
    console.log(context.getMessage());
    return data;
  }

  @Post('login')
  async login(@Payload() login: LoginDto) {
    const result = await this.authService.login(login);
    return result;
  }
}
