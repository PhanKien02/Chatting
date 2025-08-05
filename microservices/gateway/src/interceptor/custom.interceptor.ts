import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, map, catchError, throwError } from 'rxjs';
import { HttpException } from '@nestjs/common';
import { IResponse } from '@/interfaces/response.interface';
import { mapGrpcCodeToHttpStatus } from '@/utils/mappingerror';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
        intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
                return next.handle().pipe(
                        // ✅ Nếu thành công, bạn có thể chỉnh sửa format response tại đây
                        map((data: IResponse<unknown> | any) => {
                                if (
                                        !data ||
                                        typeof data.message === 'undefined' ||
                                        typeof data.data === 'undefined'
                                ) {
                                        return {
                                                statusCode:
                                                        context.switchToHttp().getResponse()
                                                                .statusCode || 200,
                                                message: data?.message || 'Thành công',
                                                data: data || null,
                                        };
                                }
                                return {
                                        statusCode:
                                                context.switchToHttp().getResponse().statusCode ||
                                                200,
                                        message: data.message,
                                        data: data.data,
                                };
                        }),

                        // ❌ Nếu có lỗi, xử lý tại đây
                        catchError(err => {
                                const timestamp = new Date().toISOString();
                                const statusCode =
                                        err?.status || mapGrpcCodeToHttpStatus(err?.error?.code);
                                return throwError(
                                        () =>
                                                new HttpException(
                                                        {
                                                                success: false,
                                                                statusCode: statusCode,
                                                                message:
                                                                        err.message ||
                                                                        'Internal server error',
                                                                timestamp,
                                                        },
                                                        statusCode
                                                )
                                );
                        })
                );
        }
}
