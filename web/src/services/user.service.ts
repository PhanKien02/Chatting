import { AxiosInstance } from 'axios';
import baseRequest from './base-request.service';
import { LoginPayload, LoginResponse } from '@/models/user.model';
import { ApiResponse } from '@/models/response';

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
}

export const userService = new UserService();
