import { AxiosInstance } from 'axios';
import baseRequest from './base-request.service';
import { IUser, LoginPayload, LoginResponse } from '@/models/user.model';
import { ApiResponse, PaginationResponse } from '@/models/response';

class UserService {
    private readonly request: AxiosInstance;
    constructor() {
        this.request = baseRequest;
    }

    async login(data: LoginPayload): Promise<ApiResponse<LoginResponse>> {
        const result = await this.request.post('/user/login', data);
        return result.data;
    }

    async logout(): Promise<void> {
        await this.request.post('/user/logout');
    }

    async getAllUser(page = 1, limit = 10, searchKeyword = ''): Promise<ApiResponse<PaginationResponse<IUser>>> {
        const data = await this.request.get('/user', {
            params: {
                page,
                limit,
                searchKeyword,
            },
        });
        return data.data;
    }
}

export const userService = new UserService();
