import { AxiosInstance } from "axios";
import baseRequest from "./base-request.service";
import { ICreateConversation, ICreateConversationQuery, PaginationResponseRoom } from "@/models/conversation.model";

class RoomService {
        private readonly request: AxiosInstance;
        constructor() {
                this.request = baseRequest;
        }

        async getAllCreateConversation(query: ICreateConversationQuery): Promise<PaginationResponseRoom<ICreateConversation>> {
                const result = await this.request.get('/v1/conversation', { params: query })
                return result.data
        }
}

export const roomService = new RoomService();
