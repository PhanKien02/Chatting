import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from '@/security/passport.jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.ACCESS_TOKEN_SCRECT,
      signOptions: { expiresIn: 2 * 60000 },
    }),
    ClientsModule.register([
      {
        name: 'AUTH_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: './proto/auth.proto',
          loader: {
            includeDirs: [
              join(__dirname, './proto'),
              join(__dirname, '../node_modules/google-proto-files'),
            ],
          },
          url: '0.0.0.0:3002',
        },
      },
    ]), UserModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtService],
  exports: [AuthService]
})
export class AuthModule { }
