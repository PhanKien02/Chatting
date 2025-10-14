import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './modules/email/email.module';
import { ConfigModule } from '@nestjs/config';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { FirebaseModule } from 'nestjs-firebase';
import { FirebaseModule as FirebaseNotifindModule } from './modules/firebase/firebase.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    FirebaseModule.forRoot({
      googleApplicationCredential: "path/to/credential file.json",
    }),
    RabbitMQModule.forRoot({
      exchanges: [
        {
          name: 'notification_exchange',
          type: 'topic',
        },
      ],
      uri: "amqp://guest:guest@localhost:5672",
      connectionInitOptions: { wait: true },
    }), EmailModule, FirebaseNotifindModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
