// Original file: src/proto/auth.proto

export interface User {
        id?: string;
        email?: string;
        phone?: string;
        isActive?: boolean;
        fullName?: string;
        avatarUrl?: string;
        role?: string;
}

export interface User__Output {
        id?: string;
        email?: string;
        phone?: string;
        isActive?: boolean;
        fullName?: string;
        avatarUrl?: string;
        role?: string;
}
