import { IUser } from '@/interfaces/user.interface';
import { IQuery } from '@/utils/buildFilterSortAndPaginate';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UserUpdatedRes, UserUpdatePayLoad } from './dto/update-user.dto';
import { UploadService } from '../upload/upload.service';

interface GrpcUserService {
        FindAll(query: IQuery<IUser>): Observable<IUser[]>;
        Create(body: CreateUserDto): Observable<IUser>;
        FindUserByIds(body: { ids: string[] }): Observable<UserUpdatedRes>;
        Update(body: UserUpdatePayLoad): Observable<UserUpdatedRes>
}

@Injectable()
export class UserService implements OnModuleInit {
        private userService: GrpcUserService;

        constructor(@Inject('USER_PACKAGE') private readonly userClient: ClientGrpc, private uploadService: UploadService) { }

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

        async updateUser(id: string, file: Express.Multer.File, user: UpdateUserDto) {
                if (file) {
                        const fileResponse = await this.uploadService.uploadImage({
                                file, forder: "avatar", fileName: id
                        })
                        user.avatarUrl = fileResponse.secure_url;
                }
                return this.userService.Update({ id, user })

        }
}
