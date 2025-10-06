import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { GetRoomQuery } from './dto/get-room-query.dto';

@Controller()
export class RoomController {
  constructor(private readonly roomService: RoomService) { }

  @GrpcMethod('RoomService', 'Create')
  create(@Payload() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }
  @GrpcMethod('RoomService', 'FindAllRoom')
  FindAllRoom(@Payload() query: GetRoomQuery) {
    return this.roomService.findAll(query);
  }

}
