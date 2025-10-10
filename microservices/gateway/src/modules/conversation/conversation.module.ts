import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UserModule } from '../user/user.module';
import { CurrentUserService } from '@/utils/current-user';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CONVERSATION_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'conversation',
          protoPath: join(__dirname, '../../proto/conversation.proto'),
          loader: {
            includeDirs: [
              join(__dirname, '../proto'),
              join(
                __dirname,
                '../node_modules/google-proto-files'
              ),
            ],
          },
          url: 'localhost:3004',
        },
      },
    ]),
    UserModule
  ],
  controllers: [ConversationController],
  providers: [ConversationService, CurrentUserService],
})
export class ConversationModule { }
