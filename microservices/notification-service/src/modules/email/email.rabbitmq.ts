// user.rpc.ts
import { Injectable } from '@nestjs/common';
import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { EmailService } from './email.service';
import { IMailActive } from 'src/interface/mail-active.interface';
export interface IResponseRabbitmq<T> {
        success: boolean,
        message: string | T
}
@Injectable()
export class EmailRabbitMQHandler {
        constructor(private readonly emailService: EmailService) { }
        @RabbitRPC({
                exchange: 'notification_exchange',
                queue: 'notification_email',
                routingKey: 'notification.email.active',
                queueOptions: { durable: true },
        })
        async handleFindOneUser(payload: IMailActive) {
                const response = await this.emailService.sendMailActiveAccount(payload);
                return response;
        }
}
