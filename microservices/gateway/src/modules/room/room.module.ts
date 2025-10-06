import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UserModule } from '../user/user.module';
import { CurrentUserService } from '@/utils/current-user';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ROOM_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'room',
          protoPath: join(__dirname, '../../proto/room.proto'),
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
  controllers: [RoomController],
  providers: [RoomService, CurrentUserService],
})
export class RoomModule { }
