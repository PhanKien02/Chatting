import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Conversation, ConversationSchema } from './entities/conversation.entity';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Conversation.name, schema: ConversationSchema }]),
    RabbitMQModule.forRoot({
      exchanges: [
        {
          name: 'message_exchange',
          type: 'topic',
        },
      ],
      uri: process.env.AMQP_URL || "amqp://guest:guest@localhost:5672",
      connectionInitOptions: { wait: true },
      enableControllerDiscovery: true,
    }),],
  controllers: [ConversationController],
  providers: [ConversationService],
})
export class ConversationModule { }
