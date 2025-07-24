import { IBaseModel } from './base.model';
import { IQuery } from './response';

export interface IUser extends IBaseModel {
    id?: number;
    email?: string;
    phone?: string;
    fullName?: string;
    isActive?: boolean;
    role?: RoleType;
    avatarUrl?: string;
}

export interface LoginPayload {
    login: string;
    password: string;
    role?: RoleType.USER;
}

export interface LoginResponse {
    accessToken: string;
    expiresAt: number;
    refreshToken: string;
    user: IUser;
}
export enum RoleType {
    USER = 'ROLE-USER',
    ADMIN = 'ROLE-ADMIN',
}

export interface userQuery extends IQuery<IUser> {

} 