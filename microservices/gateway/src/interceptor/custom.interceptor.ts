import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { Observable, map, catchError, throwError } from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { IResponse } from '@/interfaces/response.interface';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const ctxType = context.getType();

        return next.handle().pipe(
            // ✅ Nếu thành công, bạn có thể chỉnh sửa format response tại đây
            map((data: IResponse<unknown> | any) => {
                if (
                    !data ||
                    typeof data.message === 'undefined' ||
                    typeof data.data === 'undefined'
                ) {
                    return {
                        statusCode: context.switchToHttp().getResponse().statusCode || 200,
                        message: data?.message || 'Thành công',
                        data: data || null,
                    };
                }
                return {
                    statusCode: context.switchToHttp().getResponse().statusCode || 200,
                    message: data.message,
                    data: data.data,
                };
            }),

            // ❌ Nếu có lỗi, xử lý tại đây
            catchError((err) => {
                const timestamp = new Date().toISOString();
                console.error('❌ Error:', {
                    message: err.message,
                    stack: err.stack,
                });

                if (ctxType === 'http') {
                    const statusCode =
                        err instanceof HttpException
                            ? err.getStatus()
                            : HttpStatus.INTERNAL_SERVER_ERROR;

                    return throwError(() =>
                        new HttpException(
                            {
                                success: false,
                                statusCode,
                                message: err.message || 'Internal server error',
                                timestamp,
                            },
                            statusCode,
                        ),
                    );
                }

                if (ctxType === 'rpc') {
                    return throwError(() =>
                        new RpcException({
                            code: err.code || status.INTERNAL,
                            message: err.message || 'Internal gRPC error',
                        }),
                    );
                }

                return throwError(() => err);
            }),
        );
    }
}
