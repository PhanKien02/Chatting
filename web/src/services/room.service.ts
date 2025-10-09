import { AxiosInstance } from "axios";
import baseRequest from "./base-request.service";
import { IRoom, IRoomQuery, PaginationResponseRoom } from "@/models/room.model";
import { PaginationResponse } from "@/models/response";

class RoomService {
        private readonly request: AxiosInstance;
        constructor() {
                this.request = baseRequest;
        }

        async getAllRoom(query: IRoomQuery): Promise<PaginationResponseRoom<IRoom>> {
                const result = await this.request.get('/v1/room', { params: query })
                return result.data
        }
}

export const roomService = new RoomService();
