import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]),
  RabbitMQModule.forRoot({
    uri: 'amqp://guest:guest@localhost:5672',
    exchanges: [{ name: 'user_exchange', type: 'topic', }],
    queues: [{ name: 'user_queue', }]
  }),],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
