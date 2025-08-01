// Original file: src/proto/project.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PaginationResponse as _project_PaginationResponse, PaginationResponse__Output as _project_PaginationResponse__Output } from '../project/PaginationResponse';
import type { Project as _project_Project, Project__Output as _project_Project__Output } from '../project/Project';
import type { ProjectBlockPayLoad as _project_ProjectBlockPayLoad, ProjectBlockPayLoad__Output as _project_ProjectBlockPayLoad__Output } from '../project/ProjectBlockPayLoad';
import type { ProjectUpdatePayLoad as _project_ProjectUpdatePayLoad, ProjectUpdatePayLoad__Output as _project_ProjectUpdatePayLoad__Output } from '../project/ProjectUpdatePayLoad';
import type { Query as _project_Query, Query__Output as _project_Query__Output } from '../project/Query';

export interface ProjectServiceClient extends grpc.Client {
  Block(argument: _project_ProjectBlockPayLoad, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  Block(argument: _project_ProjectBlockPayLoad, metadata: grpc.Metadata, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  Block(argument: _project_ProjectBlockPayLoad, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  Block(argument: _project_ProjectBlockPayLoad, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  block(argument: _project_ProjectBlockPayLoad, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  block(argument: _project_ProjectBlockPayLoad, metadata: grpc.Metadata, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  block(argument: _project_ProjectBlockPayLoad, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  block(argument: _project_ProjectBlockPayLoad, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  
  Create(argument: _project_Project, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  Create(argument: _project_Project, metadata: grpc.Metadata, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  Create(argument: _project_Project, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  Create(argument: _project_Project, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  create(argument: _project_Project, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  create(argument: _project_Project, metadata: grpc.Metadata, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  create(argument: _project_Project, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  create(argument: _project_Project, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  
  FindAll(argument: _project_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_project_PaginationResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _project_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_project_PaginationResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _project_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_project_PaginationResponse__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _project_Query, callback: grpc.requestCallback<_project_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _project_Query, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_project_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _project_Query, metadata: grpc.Metadata, callback: grpc.requestCallback<_project_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _project_Query, options: grpc.CallOptions, callback: grpc.requestCallback<_project_PaginationResponse__Output>): grpc.ClientUnaryCall;
  findAll(argument: _project_Query, callback: grpc.requestCallback<_project_PaginationResponse__Output>): grpc.ClientUnaryCall;
  
  FindOne(argument: _project_ProjectBlockPayLoad, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _project_ProjectBlockPayLoad, metadata: grpc.Metadata, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _project_ProjectBlockPayLoad, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _project_ProjectBlockPayLoad, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  findOne(argument: _project_ProjectBlockPayLoad, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  findOne(argument: _project_ProjectBlockPayLoad, metadata: grpc.Metadata, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  findOne(argument: _project_ProjectBlockPayLoad, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  findOne(argument: _project_ProjectBlockPayLoad, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  
  Unblock(argument: _project_Project, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _project_Project, metadata: grpc.Metadata, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _project_Project, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  Unblock(argument: _project_Project, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  unblock(argument: _project_Project, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  unblock(argument: _project_Project, metadata: grpc.Metadata, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  unblock(argument: _project_Project, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  unblock(argument: _project_Project, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _project_ProjectUpdatePayLoad, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  Update(argument: _project_ProjectUpdatePayLoad, metadata: grpc.Metadata, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  Update(argument: _project_ProjectUpdatePayLoad, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  Update(argument: _project_ProjectUpdatePayLoad, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  update(argument: _project_ProjectUpdatePayLoad, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  update(argument: _project_ProjectUpdatePayLoad, metadata: grpc.Metadata, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  update(argument: _project_ProjectUpdatePayLoad, options: grpc.CallOptions, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  update(argument: _project_ProjectUpdatePayLoad, callback: grpc.requestCallback<_project_Project__Output>): grpc.ClientUnaryCall;
  
}

export interface ProjectServiceHandlers extends grpc.UntypedServiceImplementation {
  Block: grpc.handleUnaryCall<_project_ProjectBlockPayLoad__Output, _project_Project>;
  
  Create: grpc.handleUnaryCall<_project_Project__Output, _project_Project>;
  
  FindAll: grpc.handleUnaryCall<_project_Query__Output, _project_PaginationResponse>;
  
  FindOne: grpc.handleUnaryCall<_project_ProjectBlockPayLoad__Output, _project_Project>;
  
  Unblock: grpc.handleUnaryCall<_project_Project__Output, _project_Project>;
  
  Update: grpc.handleUnaryCall<_project_ProjectUpdatePayLoad__Output, _project_Project>;
  
}

export interface ProjectServiceDefinition extends grpc.ServiceDefinition {
  Block: MethodDefinition<_project_ProjectBlockPayLoad, _project_Project, _project_ProjectBlockPayLoad__Output, _project_Project__Output>
  Create: MethodDefinition<_project_Project, _project_Project, _project_Project__Output, _project_Project__Output>
  FindAll: MethodDefinition<_project_Query, _project_PaginationResponse, _project_Query__Output, _project_PaginationResponse__Output>
  FindOne: MethodDefinition<_project_ProjectBlockPayLoad, _project_Project, _project_ProjectBlockPayLoad__Output, _project_Project__Output>
  Unblock: MethodDefinition<_project_Project, _project_Project, _project_Project__Output, _project_Project__Output>
  Update: MethodDefinition<_project_ProjectUpdatePayLoad, _project_Project, _project_ProjectUpdatePayLoad__Output, _project_Project__Output>
}
