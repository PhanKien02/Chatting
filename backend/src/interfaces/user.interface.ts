import { ObjectId } from 'mongoose';
import { User } from '../modules/user/entities/user.entity';
export interface PayLoadToken {
    userId: ObjectId;
    role: string;
}

export interface LoginResponse {
    user: Omit<User, "password">;
    accessToken: string;
    refreshToken: string;
    expires: number;
}