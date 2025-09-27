import { IUser } from '@/interfaces/user.interface';
import { IQuery } from '@/utils/buildFilterSortAndPaginate';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserByIdsRes } from '@/proto/user/FindUserByIdsRes';

interface GrpcUserService {
        FindAll(query: IQuery<IUser>): Observable<IUser[]>;
        Create(body: CreateUserDto): Observable<IUser>;
        FindUserByIds(body: { ids: string[] }): Observable<FindUserByIdsRes>;
}

@Injectable()
export class UserService implements OnModuleInit {
        private userService: GrpcUserService;

        constructor(@Inject('USER_PACKAGE') private readonly userClient: ClientGrpc) { }

        onModuleInit() {
                this.userService = this.userClient.getService<GrpcUserService>('UserService');
        }

        async getAllUsers(query: IQuery<IUser>) {
                const data = await firstValueFrom(this.userService.FindAll(query));
                return data;
        }
        async createUser(body: CreateUserDto) {
                const data = this.userService.Create(body);
                const result = await firstValueFrom(data);
                return result;
        }

        async hasUsers(ids: number[]): Promise<boolean> {
                const data = this.userService.FindUserByIds({ ids: ids.map(e => e.toString()) });
                const result = await firstValueFrom(data);
                return result.success || false

        }
}
