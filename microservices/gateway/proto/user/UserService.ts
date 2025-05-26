// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { EmailRequest as _user_EmailRequest, EmailRequest__Output as _user_EmailRequest__Output } from '../user/EmailRequest';
import type { Query as _user_Query, Query__Output as _user_Query__Output } from '../user/Query';
import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';
import type { Users as _user_Users, Users__Output as _user_Users__Output } from '../user/Users';

export interface UserServiceClient extends grpc.Client {
  Block(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Block(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Block(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Block(argument: _user_User, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  block(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  block(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  block(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  block(argument: _user_User, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
  Create(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Create(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Create(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Create(argument: _user_User, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  create(argument: _user_User, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
  FindAll(argument: _user_Query, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_user_Users__Output>;
  FindAll(argument: _user_Query, options?: grpc.CallOptions): grpc.ClientReadableStream<_user_Users__Output>;
  findAll(argument: _user_Query, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_user_Users__Output>;
  findAll(argument: _user_Query, options?: grpc.CallOptions): grpc.ClientReadableStream<_user_Users__Output>;
  
  FindByEmail(argument: _user_EmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  FindByEmail(argument: _user_EmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  FindByEmail(argument: _user_EmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  FindByEmail(argument: _user_EmailRequest, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findByEmail(argument: _user_EmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findByEmail(argument: _user_EmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findByEmail(argument: _user_EmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findByEmail(argument: _user_EmailRequest, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
  Unblock(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _user_User, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  unblock(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  unblock(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  unblock(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  unblock(argument: _user_User, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Update(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Update(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  Update(argument: _user_User, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_User, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  update(argument: _user_User, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  Block: grpc.handleUnaryCall<_user_User__Output, _user_User>;
  
  Create: grpc.handleUnaryCall<_user_User__Output, _user_User>;
  
  FindAll: grpc.handleServerStreamingCall<_user_Query__Output, _user_Users>;
  
  FindByEmail: grpc.handleUnaryCall<_user_EmailRequest__Output, _user_User>;
  
  Unblock: grpc.handleUnaryCall<_user_User__Output, _user_User>;
  
  Update: grpc.handleUnaryCall<_user_User__Output, _user_User>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  Block: MethodDefinition<_user_User, _user_User, _user_User__Output, _user_User__Output>
  Create: MethodDefinition<_user_User, _user_User, _user_User__Output, _user_User__Output>
  FindAll: MethodDefinition<_user_Query, _user_Users, _user_Query__Output, _user_Users__Output>
  FindByEmail: MethodDefinition<_user_EmailRequest, _user_User, _user_EmailRequest__Output, _user_User__Output>
  Unblock: MethodDefinition<_user_User, _user_User, _user_User__Output, _user_User__Output>
  Update: MethodDefinition<_user_User, _user_User, _user_User__Output, _user_User__Output>
}
