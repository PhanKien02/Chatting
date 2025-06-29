// user.rpc.ts
import { Injectable } from '@nestjs/common';
import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { UserService } from './user.service';

@Injectable()
export class UserRpcHandler {
        constructor(private readonly userService: UserService) { }

        @RabbitRPC({
                exchange: 'user_exchange',
                routingKey: 'user.create',
                queue: 'user_queue',
        })
        async handleCreateUser(payload: any) {
                return await this.userService.create(payload);
        }
}
