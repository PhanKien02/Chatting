import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RoomServiceClient as _room_RoomServiceClient, RoomServiceDefinition as _room_RoomServiceDefinition } from './room/RoomService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
  room: {
    CreateRoomRequest: MessageTypeDefinition
    CreateRoomResponse: MessageTypeDefinition
    OneRoomBody: MessageTypeDefinition
    Room: MessageTypeDefinition
    RoomService: SubtypeConstructor<typeof grpc.Client, _room_RoomServiceClient> & { service: _room_RoomServiceDefinition }
  }
}

