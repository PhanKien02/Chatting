// Original file: src/proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Query as _user_Query, Query__Output as _user_Query__Output } from '../user/Query';
import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';
import type { UserBlockPayLoad as _user_UserBlockPayLoad, UserBlockPayLoad__Output as _user_UserBlockPayLoad__Output } from '../user/UserBlockPayLoad';
import type { UserUpdatePayLoad as _user_UserUpdatePayLoad, UserUpdatePayLoad__Output as _user_UserUpdatePayLoad__Output } from '../user/UserUpdatePayLoad';
import type { UsersResponseFindAll as _user_UsersResponseFindAll, UsersResponseFindAll__Output as _user_UsersResponseFindAll__Output } from '../user/UsersResponseFindAll';

export interface UserServiceClient extends grpc.Client {
  Block(argument: _user_UserBlockPayLoad, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Block(argument: _user_UserBlockPayLoad, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Block(argument: _user_UserBlockPayLoad, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Block(argument: _user_UserBlockPayLoad, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  block(argument: _user_UserBlockPayLoad, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  block(argument: _user_UserBlockPayLoad, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  block(argument: _user_UserBlockPayLoad, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  block(argument: _user_UserBlockPayLoad, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
  Create(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Create(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Create(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Create(argument: _user_User, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_User, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
  FindAll(argument: _user_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersResponseFindAll__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _user_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UsersResponseFindAll__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _user_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersResponseFindAll__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _user_Query, callback: grpc.requestCallback<_user_UsersResponseFindAll__Output>): grpc.ClientUnaryCall;
  findAll(argument: _user_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersResponseFindAll__Output>): grpc.ClientUnaryCall;
  findAll(argument: _user_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UsersResponseFindAll__Output>): grpc.ClientUnaryCall;
  findAll(argument: _user_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersResponseFindAll__Output>): grpc.ClientUnaryCall;
  findAll(argument: _user_Query, callback: grpc.requestCallback<_user_UsersResponseFindAll__Output>): grpc.ClientUnaryCall;
  
  Unblock(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _user_User, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  unblock(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  unblock(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  unblock(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  unblock(argument: _user_User, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _user_UserUpdatePayLoad, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Update(argument: _user_UserUpdatePayLoad, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Update(argument: _user_UserUpdatePayLoad, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Update(argument: _user_UserUpdatePayLoad, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UserUpdatePayLoad, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UserUpdatePayLoad, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UserUpdatePayLoad, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_UserUpdatePayLoad, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  Block: grpc.handleUnaryCall<_user_UserBlockPayLoad__Output, _user_User>;
  
  Create: grpc.handleUnaryCall<_user_User__Output, _user_User>;
  
  FindAll: grpc.handleUnaryCall<_user_Query__Output, _user_UsersResponseFindAll>;
  
  Unblock: grpc.handleUnaryCall<_user_User__Output, _user_User>;
  
  Update: grpc.handleUnaryCall<_user_UserUpdatePayLoad__Output, _user_User>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  Block: MethodDefinition<_user_UserBlockPayLoad, _user_User, _user_UserBlockPayLoad__Output, _user_User__Output>
  Create: MethodDefinition<_user_User, _user_User, _user_User__Output, _user_User__Output>
  FindAll: MethodDefinition<_user_Query, _user_UsersResponseFindAll, _user_Query__Output, _user_UsersResponseFindAll__Output>
  Unblock: MethodDefinition<_user_User, _user_User, _user_User__Output, _user_User__Output>
  Update: MethodDefinition<_user_UserUpdatePayLoad, _user_User, _user_UserUpdatePayLoad__Output, _user_User__Output>
}
