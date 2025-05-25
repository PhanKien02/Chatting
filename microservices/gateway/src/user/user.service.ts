import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc, GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { User } from 'proto/user/User';
import { Observable, toArray } from 'rxjs';


interface GrpcUserService {
    FindAll(): Observable<User[]>;
}

@Injectable()
export class UserService implements OnModuleInit {
    private userService: GrpcUserService;

    constructor(
        @Inject('USER_PACKAGE') private readonly userClient: ClientGrpc,
    ) { }

    onModuleInit() {
        this.userService = this.userClient.getService<GrpcUserService>('UserService');
    }
    getAllUsers() {
        const data = this.userService.FindAll();
        return data.pipe(toArray());
    }
}
