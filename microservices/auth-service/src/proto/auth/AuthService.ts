// Original file: src/proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Auth as _auth_Auth, Auth__Output as _auth_Auth__Output } from '../auth/Auth';
import type { FindOnePayLoad as _auth_FindOnePayLoad, FindOnePayLoad__Output as _auth_FindOnePayLoad__Output } from '../auth/FindOnePayLoad';
import type { Login as _auth_Login, Login__Output as _auth_Login__Output } from '../auth/Login';
import type { LoginResponse as _auth_LoginResponse, LoginResponse__Output as _auth_LoginResponse__Output } from '../auth/LoginResponse';
import type { Logout as _auth_Logout, Logout__Output as _auth_Logout__Output } from '../auth/Logout';
import type { LogoutResponse as _auth_LogoutResponse, LogoutResponse__Output as _auth_LogoutResponse__Output } from '../auth/LogoutResponse';
import type { RefreshToken as _auth_RefreshToken, RefreshToken__Output as _auth_RefreshToken__Output } from '../auth/RefreshToken';
import type { Register as _auth_Register, Register__Output as _auth_Register__Output } from '../auth/Register';
import type { RegisterResponse as _auth_RegisterResponse, RegisterResponse__Output as _auth_RegisterResponse__Output } from '../auth/RegisterResponse';
import type { User as _auth_User, User__Output as _auth_User__Output } from '../auth/User';

export interface AuthServiceClient extends grpc.Client {
  FindByUserId(argument: _auth_RefreshToken, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_User__Output>): grpc.ClientUnaryCall;
  FindByUserId(argument: _auth_RefreshToken, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_User__Output>): grpc.ClientUnaryCall;
  FindByUserId(argument: _auth_RefreshToken, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_User__Output>): grpc.ClientUnaryCall;
  FindByUserId(argument: _auth_RefreshToken, callback: grpc.requestCallback<_auth_User__Output>): grpc.ClientUnaryCall;
  findByUserId(argument: _auth_RefreshToken, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_User__Output>): grpc.ClientUnaryCall;
  findByUserId(argument: _auth_RefreshToken, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_User__Output>): grpc.ClientUnaryCall;
  findByUserId(argument: _auth_RefreshToken, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_User__Output>): grpc.ClientUnaryCall;
  findByUserId(argument: _auth_RefreshToken, callback: grpc.requestCallback<_auth_User__Output>): grpc.ClientUnaryCall;
  
  FindOne(argument: _auth_FindOnePayLoad, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Auth__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _auth_FindOnePayLoad, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_Auth__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _auth_FindOnePayLoad, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Auth__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _auth_FindOnePayLoad, callback: grpc.requestCallback<_auth_Auth__Output>): grpc.ClientUnaryCall;
  findOne(argument: _auth_FindOnePayLoad, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Auth__Output>): grpc.ClientUnaryCall;
  findOne(argument: _auth_FindOnePayLoad, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_Auth__Output>): grpc.ClientUnaryCall;
  findOne(argument: _auth_FindOnePayLoad, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_Auth__Output>): grpc.ClientUnaryCall;
  findOne(argument: _auth_FindOnePayLoad, callback: grpc.requestCallback<_auth_Auth__Output>): grpc.ClientUnaryCall;
  
  Login(argument: _auth_Login, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _auth_Login, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _auth_Login, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _auth_Login, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _auth_Login, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _auth_Login, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _auth_Login, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _auth_Login, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  Logout(argument: _auth_Logout, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _auth_Logout, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _auth_Logout, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _auth_Logout, callback: grpc.requestCallback<_auth_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _auth_Logout, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _auth_Logout, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _auth_Logout, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _auth_Logout, callback: grpc.requestCallback<_auth_LogoutResponse__Output>): grpc.ClientUnaryCall;
  
  RefreshToken(argument: _auth_RefreshToken, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _auth_RefreshToken, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _auth_RefreshToken, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _auth_RefreshToken, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _auth_RefreshToken, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _auth_RefreshToken, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _auth_RefreshToken, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _auth_RefreshToken, callback: grpc.requestCallback<_auth_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  Register(argument: _auth_Register, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _auth_Register, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _auth_Register, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _auth_Register, callback: grpc.requestCallback<_auth_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _auth_Register, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _auth_Register, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _auth_Register, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _auth_Register, callback: grpc.requestCallback<_auth_RegisterResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  FindByUserId: grpc.handleUnaryCall<_auth_RefreshToken__Output, _auth_User>;
  
  FindOne: grpc.handleUnaryCall<_auth_FindOnePayLoad__Output, _auth_Auth>;
  
  Login: grpc.handleUnaryCall<_auth_Login__Output, _auth_LoginResponse>;
  
  Logout: grpc.handleUnaryCall<_auth_Logout__Output, _auth_LogoutResponse>;
  
  RefreshToken: grpc.handleUnaryCall<_auth_RefreshToken__Output, _auth_LoginResponse>;
  
  Register: grpc.handleUnaryCall<_auth_Register__Output, _auth_RegisterResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  FindByUserId: MethodDefinition<_auth_RefreshToken, _auth_User, _auth_RefreshToken__Output, _auth_User__Output>
  FindOne: MethodDefinition<_auth_FindOnePayLoad, _auth_Auth, _auth_FindOnePayLoad__Output, _auth_Auth__Output>
  Login: MethodDefinition<_auth_Login, _auth_LoginResponse, _auth_Login__Output, _auth_LoginResponse__Output>
  Logout: MethodDefinition<_auth_Logout, _auth_LogoutResponse, _auth_Logout__Output, _auth_LogoutResponse__Output>
  RefreshToken: MethodDefinition<_auth_RefreshToken, _auth_LoginResponse, _auth_RefreshToken__Output, _auth_LoginResponse__Output>
  Register: MethodDefinition<_auth_Register, _auth_RegisterResponse, _auth_Register__Output, _auth_RegisterResponse__Output>
}
