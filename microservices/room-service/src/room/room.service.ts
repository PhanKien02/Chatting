import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Room } from './entities/room.entity';
import { Model } from 'mongoose';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { GetRoomQuery } from './dto/get-room-query.dto';
import { normalize } from 'src/utils/normalize';
import { paginateResponse } from 'src/utils/buildFilterSortAndPaginate';

@Injectable()
export class RoomService {
  constructor(@InjectModel(Room.name) private roomModel: Model<Room>) { }
  async create(createRoomDto: CreateRoomDto) {
    const result = await this.roomModel.create(createRoomDto);
    return result;
  }

  async findAll(query: GetRoomQuery) {
    const { limit, page, searchKeyword, idUser } = query;
    const filter = {};
    if (searchKeyword) {
      filter["$text"] = { $search: normalize(query.searchKeyword) }
    }
    const [rooms, totalResults] = await Promise.all([
      this.roomModel.find({
        ...filter,
        $or: [
          { members: idUser },
          { creator_id: idUser }
        ]
      }).limit(query.limit || 10).skip((query.page - 1) * query.limit || 0),
      this.roomModel.countDocuments(filter)
    ])
    return paginateResponse({ datas: rooms, limit, page, totalResults })
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
