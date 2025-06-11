import { Controller, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/register')
  async create(@Payload() createAuthDto: RegisterDto) {
    const result = await this.authService.create(createAuthDto);
    return result;
  }


}
