import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { RegisterDto } from './dto/create-auth.dto';
import { ClientGrpc } from '@nestjs/microservices';
import { LoginDto } from './dto/login.dto';
import { firstValueFrom, Observable } from 'rxjs';
import { IUser } from '@/interfaces/user.interface';

interface GrpcAuthService {
  Register(body: RegisterDto): Promise<void>;
  Login(body: LoginDto): Promise<any>;
  FindByUserId({ idUser }): Observable<IUser>;
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

  async login(loginDto: LoginDto) {
    const user = await this.authService.Login(loginDto);
    return user;
  }

  async findByUserId(idUser: number) {
    const user = await firstValueFrom(this.authService.FindByUserId({ idUser }));
    return user;
  }
}
