import { AxiosInstance } from "axios";
import baseRequest from "./base-request.service";
import { IUser, LoginPayload, LoginResponse } from "@/models/user.model";
import { ApiResponse, PaginationResponse } from "@/models/response";

class UserService {
    private readonly request: AxiosInstance;
    constructor() {
        this.request = baseRequest;
    }

    async login(data: LoginPayload): Promise<ApiResponse<LoginResponse>> {
        const result = await this.request.post("/v1/auth/login", data);
        return result.data;
    }

    async logout(id: number): Promise<void> {
        await this.request.delete(`/v1/auth/logout/${id}`);
    }

    async getAllUser(page = 1, limit = 10, searchKeyword = ""): Promise<ApiResponse<PaginationResponse<IUser>>> {
        const data = await this.request.get("/v1/user", {
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
