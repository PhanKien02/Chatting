// Original file: src/proto/room.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateRoomRequest as _room_CreateRoomRequest, CreateRoomRequest__Output as _room_CreateRoomRequest__Output } from '../room/CreateRoomRequest';
import type { OneRoomBody as _room_OneRoomBody, OneRoomBody__Output as _room_OneRoomBody__Output } from '../room/OneRoomBody';
import type { Room as _room_Room, Room__Output as _room_Room__Output } from '../room/Room';

export interface RoomServiceClient extends grpc.Client {
  Create(argument: _room_CreateRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Create(argument: _room_CreateRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Create(argument: _room_CreateRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Create(argument: _room_CreateRoomRequest, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  create(argument: _room_CreateRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  create(argument: _room_CreateRoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  create(argument: _room_CreateRoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  create(argument: _room_CreateRoomRequest, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  
  FindOne(argument: _room_OneRoomBody, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _room_OneRoomBody, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _room_OneRoomBody, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _room_OneRoomBody, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  findOne(argument: _room_OneRoomBody, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  findOne(argument: _room_OneRoomBody, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  findOne(argument: _room_OneRoomBody, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  findOne(argument: _room_OneRoomBody, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  
}

export interface RoomServiceHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_room_CreateRoomRequest__Output, _room_Room>;
  
  FindOne: grpc.handleUnaryCall<_room_OneRoomBody__Output, _room_Room>;
  
}

export interface RoomServiceDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_room_CreateRoomRequest, _room_Room, _room_CreateRoomRequest__Output, _room_Room__Output>
  FindOne: MethodDefinition<_room_OneRoomBody, _room_Room, _room_OneRoomBody__Output, _room_Room__Output>
}
