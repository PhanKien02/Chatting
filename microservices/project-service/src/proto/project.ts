import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ProjectServiceClient as _project_ProjectServiceClient, ProjectServiceDefinition as _project_ProjectServiceDefinition } from './project/ProjectService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
  project: {
    GetProjectByUserPayload: MessageTypeDefinition
    PaginationResponse: MessageTypeDefinition
    Project: MessageTypeDefinition
    ProjectBlockPayLoad: MessageTypeDefinition
    ProjectFindAll: MessageTypeDefinition
    ProjectService: SubtypeConstructor<typeof grpc.Client, _project_ProjectServiceClient> & { service: _project_ProjectServiceDefinition }
    ProjectUpdatePayLoad: MessageTypeDefinition
    Query: MessageTypeDefinition
  }
}

