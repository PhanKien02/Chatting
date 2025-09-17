import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { UserRabbitMQHandler } from './user.rabbitmq'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]),
  RabbitMQModule.forRoot({
    uri: process.env.AMQP_URL || "amqp://guest:guest@localhost:5672",
    exchanges: [{ name: 'user_exchange', type: 'topic', }],
    connectionInitOptions: { wait: true, },  // bắt buộc chờ kết nối RabbitMQ ổn định
    enableControllerDiscovery: true, // để discover @RabbitRPC
  }),],
  controllers: [UserController],
  providers: [UserService, UserRabbitMQHandler],
})
export class UserModule { }
