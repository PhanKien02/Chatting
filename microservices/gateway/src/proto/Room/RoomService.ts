// Original file: src/proto/room.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { FindRoomByUser as _room_FindRoomByUser, FindRoomByUser__Output as _room_FindRoomByUser__Output } from '../room/FindRoomByUser';
import type { OneRoomBody as _room_OneRoomBody, OneRoomBody__Output as _room_OneRoomBody__Output } from '../room/OneRoomBody';
import type { PaginationResponse as _room_PaginationResponse, PaginationResponse__Output as _room_PaginationResponse__Output } from '../room/PaginationResponse';
import type { Query as _room_Query, Query__Output as _room_Query__Output } from '../room/Query';
import type { Room as _room_Room, Room__Output as _room_Room__Output } from '../room/Room';

export interface RoomServiceClient extends grpc.Client {
  Block(argument: _room_OneRoomBody, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Block(argument: _room_OneRoomBody, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Block(argument: _room_OneRoomBody, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Block(argument: _room_OneRoomBody, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  block(argument: _room_OneRoomBody, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  block(argument: _room_OneRoomBody, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  block(argument: _room_OneRoomBody, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  block(argument: _room_OneRoomBody, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  
  Create(argument: _room_Room, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Create(argument: _room_Room, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Create(argument: _room_Room, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Create(argument: _room_Room, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  create(argument: _room_Room, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  create(argument: _room_Room, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  create(argument: _room_Room, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  create(argument: _room_Room, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  
  FindAll(argument: _room_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _room_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _room_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _room_Query, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _room_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _room_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _room_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _room_Query, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  
  FindOne(argument: _room_OneRoomBody, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _room_OneRoomBody, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _room_OneRoomBody, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _room_OneRoomBody, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  findOne(argument: _room_OneRoomBody, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  findOne(argument: _room_OneRoomBody, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  findOne(argument: _room_OneRoomBody, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  findOne(argument: _room_OneRoomBody, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  
  FindRoomByUser(argument: _room_FindRoomByUser, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  FindRoomByUser(argument: _room_FindRoomByUser, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  FindRoomByUser(argument: _room_FindRoomByUser, options: grpc.CallOptions, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  FindRoomByUser(argument: _room_FindRoomByUser, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findRoomByUser(argument: _room_FindRoomByUser, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findRoomByUser(argument: _room_FindRoomByUser, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findRoomByUser(argument: _room_FindRoomByUser, options: grpc.CallOptions, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findRoomByUser(argument: _room_FindRoomByUser, callback: grpc.requestCallback<_room_PaginationResponse__Output>): grpc.ClientUnaryCall;
  
  Unblock(argument: _room_OneRoomBody, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _room_OneRoomBody, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _room_OneRoomBody, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _room_OneRoomBody, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  unblock(argument: _room_OneRoomBody, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  unblock(argument: _room_OneRoomBody, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  unblock(argument: _room_OneRoomBody, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  unblock(argument: _room_OneRoomBody, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _room_Room, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Update(argument: _room_Room, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Update(argument: _room_Room, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  Update(argument: _room_Room, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  update(argument: _room_Room, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  update(argument: _room_Room, metadata: grpc.Metadata, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  update(argument: _room_Room, options: grpc.CallOptions, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  update(argument: _room_Room, callback: grpc.requestCallback<_room_Room__Output>): grpc.ClientUnaryCall;
  
}

export interface RoomServiceHandlers extends grpc.UntypedServiceImplementation {
  Block: grpc.handleUnaryCall<_room_OneRoomBody__Output, _room_Room>;
  
  Create: grpc.handleUnaryCall<_room_Room__Output, _room_Room>;
  
  FindAll: grpc.handleUnaryCall<_room_Query__Output, _room_PaginationResponse>;
  
  FindOne: grpc.handleUnaryCall<_room_OneRoomBody__Output, _room_Room>;
  
  FindRoomByUser: grpc.handleUnaryCall<_room_FindRoomByUser__Output, _room_PaginationResponse>;
  
  Unblock: grpc.handleUnaryCall<_room_OneRoomBody__Output, _room_Room>;
  
  Update: grpc.handleUnaryCall<_room_Room__Output, _room_Room>;
  
}

export interface RoomServiceDefinition extends grpc.ServiceDefinition {
  Block: MethodDefinition<_room_OneRoomBody, _room_Room, _room_OneRoomBody__Output, _room_Room__Output>
  Create: MethodDefinition<_room_Room, _room_Room, _room_Room__Output, _room_Room__Output>
  FindAll: MethodDefinition<_room_Query, _room_PaginationResponse, _room_Query__Output, _room_PaginationResponse__Output>
  FindOne: MethodDefinition<_room_OneRoomBody, _room_Room, _room_OneRoomBody__Output, _room_Room__Output>
  FindRoomByUser: MethodDefinition<_room_FindRoomByUser, _room_PaginationResponse, _room_FindRoomByUser__Output, _room_PaginationResponse__Output>
  Unblock: MethodDefinition<_room_OneRoomBody, _room_Room, _room_OneRoomBody__Output, _room_Room__Output>
  Update: MethodDefinition<_room_Room, _room_Room, _room_Room__Output, _room_Room__Output>
}
