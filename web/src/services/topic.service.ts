import { AxiosInstance } from 'axios';
import baseRequest from './base-request.service';
import { ApiResponse, PaginationResponse } from '@/models/response';
import { ITopic, ITopicPayload } from '@/models/topic.model';

class TopicService {
    private readonly request: AxiosInstance;
    constructor() {
        this.request = baseRequest;
    }

    async getAllopic(page = 1, limit = 10, searchKeyword = ''): Promise<ApiResponse<PaginationResponse<ITopic>>> {
        const data = await this.request.get('/v1/topic', {
            params: {
                page,
                limit,
                searchKeyword,
            },
        });
        return data.data;
    }

    async createTopic(data: ITopicPayload) {
        return await this.request.post('/v1/topic', data);
    }
    async updateTopic(id: string, data: ITopicPayload) {
        return await this.request.put(`/v1/topic/${id}`, data);
    }
}
export const topicService = new TopicService();
