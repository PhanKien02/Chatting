import { Room } from "../entities/room.entity";

export class CreateRoomDto implements Omit<Room, "id createdAt updatedAt deletedAt"> { }
