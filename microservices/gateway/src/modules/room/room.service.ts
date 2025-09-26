import { Inject, Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { IQuery } from '@/utils/buildFilterSortAndPaginate';
import { firstValueFrom, Observable } from 'rxjs';
import { IRoom } from '@/interfaces/room.interface';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateRoomResponse } from '@/proto/room/CreateRoomResponse';

interface GrpcRoomService {
  FindAll(query: IQuery<IRoom>): Observable<IRoom[]>;
  Create(body: CreateRoomDto): Observable<CreateRoomResponse>;
}

@Injectable()
export class RoomService {
  private roomService: GrpcRoomService;
  constructor(@Inject('ROOM_PACKAGE') private readonly userClient: ClientGrpc) { }
  onModuleInit() {
    this.roomService = this.userClient.getService<GrpcRoomService>('RoomService');
  }

  async create(createRoomDto: CreateRoomDto) {
    const data = this.roomService.Create(createRoomDto);
    console.log({ data });

    const result = await firstValueFrom(data);
    return result;
  }

  findAll() {
    return `This action returns all room`;
  }

  findOne(id: number) {
    return `This action returns a #${id} room`;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return updateRoomDto;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
