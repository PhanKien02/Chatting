import { Room } from "@/proto/Room/Room";

export class CreateRoomDto implements Omit<Room, "id createdAt updatedAt deletedAt"> { }
