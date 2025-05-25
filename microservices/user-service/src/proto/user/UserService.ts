// Original file: src/proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { UpdateUser as _user_UpdateUser, UpdateUser__Output as _user_UpdateUser__Output } from '../user/UpdateUser';
import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';
import type { UserById as _user_UserById, UserById__Output as _user_UserById__Output } from '../user/UserById';

export interface UserServiceClient extends grpc.Client {
  Create(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Create(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Create(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Create(argument: _user_User, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_User, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
  FindAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_user_User__Output>;
  FindAll(argument: _google_protobuf_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_user_User__Output>;
  findAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_user_User__Output>;
  findAll(argument: _google_protobuf_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_user_User__Output>;
  
  FindOne(argument: _user_UserById, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _user_UserById, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _user_UserById, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _user_UserById, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _user_UserById, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _user_UserById, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _user_UserById, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _user_UserById, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
  Remove(argument: _user_UserById, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Remove(argument: _user_UserById, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Remove(argument: _user_UserById, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Remove(argument: _user_UserById, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  remove(argument: _user_UserById, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  remove(argument: _user_UserById, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  remove(argument: _user_UserById, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  remove(argument: _user_UserById, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _user_UpdateUser, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Update(argument: _user_UpdateUser, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Update(argument: _user_UpdateUser, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Update(argument: _user_UpdateUser, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UpdateUser, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UpdateUser, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UpdateUser, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UpdateUser, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_user_User__Output, _user_User>;
  
  FindAll: grpc.handleServerStreamingCall<_google_protobuf_Empty__Output, _user_User>;
  
  FindOne: grpc.handleUnaryCall<_user_UserById__Output, _user_User>;
  
  Remove: grpc.handleUnaryCall<_user_UserById__Output, _google_protobuf_Empty>;
  
  Update: grpc.handleUnaryCall<_user_UpdateUser__Output, _user_User>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_user_User, _user_User, _user_User__Output, _user_User__Output>
  FindAll: MethodDefinition<_google_protobuf_Empty, _user_User, _google_protobuf_Empty__Output, _user_User__Output>
  FindOne: MethodDefinition<_user_UserById, _user_User, _user_UserById__Output, _user_User__Output>
  Remove: MethodDefinition<_user_UserById, _google_protobuf_Empty, _user_UserById__Output, _google_protobuf_Empty__Output>
  Update: MethodDefinition<_user_UpdateUser, _user_User, _user_UpdateUser__Output, _user_User__Output>
}
