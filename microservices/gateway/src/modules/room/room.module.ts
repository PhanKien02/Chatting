import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

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
          url: 'room-service:3002',
        },
      },
    ]),
  ],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule { }
