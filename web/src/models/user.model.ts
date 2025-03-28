import { IBaseModel } from './base.model';

export interface IUser extends IBaseModel {
    id: number;
    email: string;
    phone: string;
    fullName: string;
    isActive: boolean;
    activeKey: string;
    resetKey: string;
    citizenIdentificationNumber: string;
    citizenIDFrontUrl: string;
    citizenIDFrontBack: string;
    role: string;
    avatarUrl?: string;
}

export interface LoginPayload {
    login: string;
    password: string;
    role?: 'ROLE-ADMIN';
}

export interface LoginResponse {
    accessToken: string;
    expires: number;
    refreshToken: string;
    user: IUser;
}
export enum RoleType {
    USER = 'ROLE-USER',
    ADMIN = 'ROLE-ADMIN',
    MERCHANT = 'ROLE-MERCHANT',
}
