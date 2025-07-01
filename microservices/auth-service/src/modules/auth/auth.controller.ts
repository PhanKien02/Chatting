import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';
import { LoginResponse } from 'src/proto/auth/LoginResponse';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @GrpcMethod('AuthService', 'Register')
  async create(data: RegisterDto) {
    const result = await this.authService.create(data);
    return result;
  }

  @GrpcMethod('AuthService', 'Login')
  async login(login: LoginDto): Promise<LoginResponse> {
    const result = await this.authService.login(login);
    return result;
  }

  @GrpcMethod('AuthService', 'FindByUserId')
  async FindByUserId(data: any) {
    const result = await this.authService.findByUserId(data.idUser.toNumber());
    return result;
  }
}
