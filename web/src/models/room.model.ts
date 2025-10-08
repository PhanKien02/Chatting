import { ApiResponse, IQuery } from "./response";

export interface IRoom {
        id: string;
        name: string
        isGroup: number
        members: string[];
        creator_id: number

}

export interface IRoomQuery extends IQuery<IRoom> { }