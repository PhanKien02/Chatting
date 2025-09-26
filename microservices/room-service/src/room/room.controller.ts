import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';

@Controller()
export class RoomController {
  constructor(private readonly roomService: RoomService) { }

  @GrpcMethod('RoomService', 'Create')
  create(@Payload() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

}
