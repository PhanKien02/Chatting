import { ApiResponse, IQuery } from "./response";

export interface IRoom {
        id: string;
        name: string
        isGroup: number
        members: string[];
        creator_id: number

}
export interface PaginationResponseRoom<T> {
        data: { datas: T[] };
        limit: number;
        page: number;
        totalResults: number;
}
export interface IRoomQuery extends IQuery<IRoom> { }