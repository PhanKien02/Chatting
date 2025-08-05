// Original file: src/proto/user.proto

export interface User {
        id?: string;
        email?: string;
        password?: string;
        fullName?: string;
        isActive?: boolean;
        phone?: string;
        avatarUrl?: string;
        role?: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
}

export interface User__Output {
        id?: string;
        email?: string;
        password?: string;
        fullName?: string;
        isActive?: boolean;
        phone?: string;
        avatarUrl?: string;
        role?: string;
        createdAt?: string;
        updatedAt?: string;
        deletedAt?: string;
}
