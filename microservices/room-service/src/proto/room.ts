import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RoomServiceClient as _Room_RoomServiceClient, RoomServiceDefinition as _Room_RoomServiceDefinition } from './Room/RoomService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Room: {
    FindRoomByUser: MessageTypeDefinition
    Member: MessageTypeDefinition
    OneRoomBody: MessageTypeDefinition
    PaginationResponse: MessageTypeDefinition
    Query: MessageTypeDefinition
    Room: MessageTypeDefinition
    RoomService: SubtypeConstructor<typeof grpc.Client, _Room_RoomServiceClient> & { service: _Room_RoomServiceDefinition }
  }
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
}

