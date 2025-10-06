import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { IUser } from '@/interfaces/user.interface';

@Injectable({ scope: Scope.REQUEST })
export class CurrentUserService {
        constructor(@Inject(REQUEST) private readonly request: Request) { }

        getUser(): IUser {
                return this.request["user"] as IUser;
        }
}