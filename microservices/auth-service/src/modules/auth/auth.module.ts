import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      //* Registering the gRPC client to user service
      //* This is the user service package
      {
        name: 'USER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: './src/proto/user.proto',
          loader: {
            includeDirs: [
              join(__dirname, './src/proto'),
              join(__dirname, '../node_modules/google-proto-files'),
            ],
          },
          url: '0.0.0.0:3001',
        },
      },
    ]),
    TypeOrmModule.forFeature([Auth])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
