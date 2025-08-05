// Original file: src/proto/user.proto

export interface Query {
        searchKeyword?: string;
        page?: number;
        limit?: number;
        sort?: string;
        isActive?: boolean;
        role?: string;
}

export interface Query__Output {
        searchKeyword?: string;
        page?: number;
        limit?: number;
        sort?: string;
        isActive?: boolean;
        role?: string;
}
