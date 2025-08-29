import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Room } from './entities/room.entity';
import { Model } from 'mongoose';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';

@Injectable()
export class RoomService {
  constructor(@InjectModel(Room.name) private roomModel: Model<Room>) { }
  create(createRoomDto: CreateRoomDto) {
    return this.roomModel.create(createRoomDto)
  }

  findAll() {
    return `This action returns all room`;
  }

  async findOne(_id: string) {
    const room = await this.roomModel.findOne({ _id });
    if (!room)
      throw new RpcException({
        code: status.INVALID_ARGUMENT,
        message: "Phòng chat không tồn tại"
      })
    return room;
  }

  async update(id: string, updateRoomDto: UpdateRoomDto) {
    return await this.roomModel.findByIdAndUpdate(id, updateRoomDto, { new: true })
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
