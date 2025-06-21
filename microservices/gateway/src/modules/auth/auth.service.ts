import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { RegisterDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ClientGrpc } from '@nestjs/microservices';

interface GrpcAuthService {
  Register(body: RegisterDto): Promise<void>;
}
@Injectable()
export class AuthService implements OnModuleInit {
  private authService: GrpcAuthService;
  constructor(@Inject('AUTH_PACKAGE') private readonly authClient: ClientGrpc,) { }
  onModuleInit() {
    this.authService = this.authClient.getService<GrpcAuthService>('AuthService');
  }
  async register(registerDto: RegisterDto) {
    const user = await this.authService.Register(registerDto);
    return user;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
