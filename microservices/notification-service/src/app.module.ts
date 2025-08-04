import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './modules/email/email.module';
import { ConfigModule } from '@nestjs/config';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    RabbitMQModule.forRoot({
      exchanges: [
        {
          name: 'notification_exchange',
          type: 'topic',
        },
      ],
      uri: process.env.AMQP_URL || "",
      connectionInitOptions: { wait: true },
    }), EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
