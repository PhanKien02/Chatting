import { IResponse } from '@/interfaces/response.interface';
import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Response,
    InternalServerErrorException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data: IResponse<unknown> | any) => {
                if (
                    !data ||
                    typeof data.message === 'undefined' ||
                    typeof data.data === 'undefined'
                ) {
                    return {
                        statusCode: context.switchToHttp().getResponse().statusCode || 200,
                        message: data.message || 'Thành công',
                        data: data,
                    };
                }
                return {
                    statusCode: context.switchToHttp().getResponse().statusCode || 200,
                    message: data.message,
                    data: data.data,
                };
            }),
        );
    }
}
