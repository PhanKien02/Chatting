import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { IQuery } from '@/utils/buildFilterSortAndPaginate';
import { firstValueFrom, Observable } from 'rxjs';
import { IRoom } from '@/interfaces/room.interface';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateRoomResponse } from '@/proto/room/CreateRoomResponse';
import { UserService } from '../user/user.service';

interface GrpcRoomService {
  FindAll(query: IQuery<IRoom>): Observable<IRoom[]>;
  Create(body: CreateRoomDto): Observable<CreateRoomResponse>;
}

@Injectable()
export class RoomService {
  private roomService: GrpcRoomService;
  constructor(@Inject('ROOM_PACKAGE') private readonly userClient: ClientGrpc, private readonly userService: UserService) { }
  onModuleInit() {
    this.roomService = this.userClient.getService<GrpcRoomService>('RoomService');
  }

  async create(createRoomDto: CreateRoomDto) {
    const hasUser = await this.userService.hasUsers(createRoomDto.members);
    if (!hasUser) throw new BadRequestException("Người dùng không tồn tại");
    const data = this.roomService.Create(createRoomDto);
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
