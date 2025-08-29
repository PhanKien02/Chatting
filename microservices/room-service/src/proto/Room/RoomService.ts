// Original file: src/proto/room.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { OneRoomBody as _Room_OneRoomBody, OneRoomBody__Output as _Room_OneRoomBody__Output } from '../Room/OneRoomBody';
import type { PaginationResponse as _Room_PaginationResponse, PaginationResponse__Output as _Room_PaginationResponse__Output } from '../Room/PaginationResponse';
import type { Query as _Room_Query, Query__Output as _Room_Query__Output } from '../Room/Query';
import type { Room as _Room_Room, Room__Output as _Room_Room__Output } from '../Room/Room';

export interface RoomServiceClient extends grpc.Client {
  Block(argument: _Room_OneRoomBody, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  Block(argument: _Room_OneRoomBody, metadata: grpc.Metadata, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  Block(argument: _Room_OneRoomBody, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  Block(argument: _Room_OneRoomBody, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  block(argument: _Room_OneRoomBody, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  block(argument: _Room_OneRoomBody, metadata: grpc.Metadata, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  block(argument: _Room_OneRoomBody, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  block(argument: _Room_OneRoomBody, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  
  Create(argument: _Room_Room, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  Create(argument: _Room_Room, metadata: grpc.Metadata, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  Create(argument: _Room_Room, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  Create(argument: _Room_Room, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  create(argument: _Room_Room, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  create(argument: _Room_Room, metadata: grpc.Metadata, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  create(argument: _Room_Room, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  create(argument: _Room_Room, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  
  FindAll(argument: _Room_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _Room_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_Room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _Room_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _Room_Query, callback: grpc.requestCallback<_Room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _Room_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _Room_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_Room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _Room_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _Room_Query, callback: grpc.requestCallback<_Room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  
  FindOne(argument: _Room_OneRoomBody, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _Room_OneRoomBody, metadata: grpc.Metadata, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _Room_OneRoomBody, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _Room_OneRoomBody, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  findOne(argument: _Room_OneRoomBody, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  findOne(argument: _Room_OneRoomBody, metadata: grpc.Metadata, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  findOne(argument: _Room_OneRoomBody, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  findOne(argument: _Room_OneRoomBody, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  
  Unblock(argument: _Room_OneRoomBody, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _Room_OneRoomBody, metadata: grpc.Metadata, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _Room_OneRoomBody, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _Room_OneRoomBody, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  unblock(argument: _Room_OneRoomBody, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  unblock(argument: _Room_OneRoomBody, metadata: grpc.Metadata, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  unblock(argument: _Room_OneRoomBody, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  unblock(argument: _Room_OneRoomBody, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _Room_Room, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  Update(argument: _Room_Room, metadata: grpc.Metadata, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  Update(argument: _Room_Room, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  Update(argument: _Room_Room, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  update(argument: _Room_Room, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  update(argument: _Room_Room, metadata: grpc.Metadata, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  update(argument: _Room_Room, options: grpc.CallOptions, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  update(argument: _Room_Room, callback: grpc.requestCallback<_Room_Room__Output>): grpc.ClientUnaryCall;
  
}

export interface RoomServiceHandlers extends grpc.UntypedServiceImplementation {
  Block: grpc.handleUnaryCall<_Room_OneRoomBody__Output, _Room_Room>;
  
  Create: grpc.handleUnaryCall<_Room_Room__Output, _Room_Room>;
  
  FindAll: grpc.handleUnaryCall<_Room_Query__Output, _Room_PaginationResponse>;
  
  FindOne: grpc.handleUnaryCall<_Room_OneRoomBody__Output, _Room_Room>;
  
  Unblock: grpc.handleUnaryCall<_Room_OneRoomBody__Output, _Room_Room>;
  
  Update: grpc.handleUnaryCall<_Room_Room__Output, _Room_Room>;
  
}

export interface RoomServiceDefinition extends grpc.ServiceDefinition {
  Block: MethodDefinition<_Room_OneRoomBody, _Room_Room, _Room_OneRoomBody__Output, _Room_Room__Output>
  Create: MethodDefinition<_Room_Room, _Room_Room, _Room_Room__Output, _Room_Room__Output>
  FindAll: MethodDefinition<_Room_Query, _Room_PaginationResponse, _Room_Query__Output, _Room_PaginationResponse__Output>
  FindOne: MethodDefinition<_Room_OneRoomBody, _Room_Room, _Room_OneRoomBody__Output, _Room_Room__Output>
  Unblock: MethodDefinition<_Room_OneRoomBody, _Room_Room, _Room_OneRoomBody__Output, _Room_Room__Output>
  Update: MethodDefinition<_Room_Room, _Room_Room, _Room_Room__Output, _Room_Room__Output>
}
