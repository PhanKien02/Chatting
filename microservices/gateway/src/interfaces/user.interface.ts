export interface IUser {
        id: number;
        email: string;
        phone: string;
        isActive: boolean;
        fullName: string;
        avatarUrl: string;
}

export interface PayLoadToken {
        userId: number;
        role: string;
}