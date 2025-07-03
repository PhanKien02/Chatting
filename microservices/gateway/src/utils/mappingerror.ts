import { HttpStatus } from '@nestjs/common';
import { status as GrpcStatus } from '@grpc/grpc-js';

export function mapGrpcCodeToHttpStatus(code: number): number {
        switch (code) {
                case GrpcStatus.OK:
                        return HttpStatus.OK;
                case GrpcStatus.CANCELLED:
                        return 499; // Client Closed Request
                case GrpcStatus.UNKNOWN:
                        return HttpStatus.INTERNAL_SERVER_ERROR;
                case GrpcStatus.INVALID_ARGUMENT:
                        return HttpStatus.BAD_REQUEST;
                case GrpcStatus.DEADLINE_EXCEEDED:
                        return HttpStatus.GATEWAY_TIMEOUT;
                case GrpcStatus.NOT_FOUND:
                        return HttpStatus.NOT_FOUND;
                case GrpcStatus.ALREADY_EXISTS:
                        return HttpStatus.CONFLICT;
                case GrpcStatus.PERMISSION_DENIED:
                        return HttpStatus.FORBIDDEN;
                case GrpcStatus.UNAUTHENTICATED:
                        return HttpStatus.UNAUTHORIZED;
                case GrpcStatus.RESOURCE_EXHAUSTED:
                        return HttpStatus.TOO_MANY_REQUESTS;
                case GrpcStatus.UNAVAILABLE:
                        return HttpStatus.SERVICE_UNAVAILABLE;
                default:
                        return HttpStatus.INTERNAL_SERVER_ERROR;
        }
}
