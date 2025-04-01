import { AxiosInstance } from 'axios';
import baseRequest from './base-request.service';
import { ApiResponse } from '@/models/response';
import { ITopic, ITopicPayload, ITopicsResponse } from '@/models/topic.model';

class TopicService {
    private readonly request: AxiosInstance;
    constructor() {
        this.request = baseRequest;
    }

    async getAllopic(page = 1, limit = 10, searchKeyword = ''): Promise<ApiResponse<ITopicsResponse>> {
        return await this.request.get('/topic', {
            params: {
                page,
                limit,
                searchKeyword,
            },
        });
    }

    async createTopic(data: ITopicPayload) {
        return await this.request.post('/topic', data);
    }
    async updateTopic(id: string, data: ITopicPayload) {
        return await this.request.put(`/topic/${id}`, data);
    }
}
export const topicService = new TopicService();
