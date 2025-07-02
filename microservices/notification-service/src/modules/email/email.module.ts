import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD, // Không dùng mật khẩu Gmail thường
        },
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter({ inlineCssEnabled: true, }),
        options: {
          strict: true,
        },
      },
    }),
    RabbitMQModule.forRoot({
      exchanges: [
        {
          name: 'notification_exchange',
          type: 'topic',
        },
      ],
      queues: [
        {
          name: 'notification_email',
          routingKey: 'email_active',
          exchange: 'notification_exchange'
        }
      ],
      uri: process.env.AMQP_URL || "amqp://guest:guest@localhost:5672",
      connectionInitOptions: { wait: true },
    })
  ],
  providers: [EmailService],
})
export class EmailModule { }
