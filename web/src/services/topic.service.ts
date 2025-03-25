import { AxiosInstance } from "axios";
import baseRequest from "./base-request.service";
import { ApiResponse } from "@/models/response";
import { ITopic } from "@/models/topic.model";

class TopicService {
    private readonly request: AxiosInstance;
    constructor() {
        this.request = baseRequest
    }

    async getAllopic(): Promise<ApiResponse<ITopic[]>> {
        return await this.request.get('/topic');
    }
}

export const topicService = new TopicService()