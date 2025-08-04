import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { JwtService } from '@nestjs/jwt';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    TypeOrmModule.forFeature([Auth]),
    RabbitMQModule.forRoot({
      exchanges: [
        {
          name: 'auth_exchange',
          type: 'topic',
        },
      ],
      uri: process.env.AMQP_URL || "",
      connectionInitOptions: { wait: true },
    }),],
  controllers: [AuthController],
  providers: [AuthService, JwtService],
})
export class AuthModule { }
