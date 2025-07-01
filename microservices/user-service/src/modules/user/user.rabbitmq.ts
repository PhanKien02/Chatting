// user.rpc.ts
import { Injectable } from '@nestjs/common';
import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
export interface IResponseRabbitmq<T> {
        success: boolean,
        message: string | T
}
@Injectable()
export class UserRabbitMQHandler {
        constructor(private readonly userService: UserService) { }

        @RabbitRPC({
                exchange: 'user_exchange',
                routingKey: 'user.create',
                queue: 'user_queue',
                queueOptions: { durable: true }
        })
        async handleCreateUser(payload: any): Promise<IResponseRabbitmq<UserEntity>> {
                const response = await this.userService.create(payload);
                return response

        }
        @RabbitRPC({
                exchange: 'user_exchange',
                queue: 'user_find_queue',
                routingKey: 'user.find.one',
                queueOptions: { durable: true },
        })
        async handleFindOneUser(payload: { id: number }): Promise<IResponseRabbitmq<UserEntity | null>> {
                const response = await this.userService.findOne(+payload.id);
                return response;
        }
}
