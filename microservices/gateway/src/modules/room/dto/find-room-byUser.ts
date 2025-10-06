import { IRoom } from "@/interfaces/room.interface";
import { IQuery } from "@/utils/buildFilterSortAndPaginate";

export class FindRoomByQuery extends IQuery<IRoom> {
        idUser: number
}