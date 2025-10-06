import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { firstValueFrom, Observable } from 'rxjs';
import { IRoom } from '@/interfaces/room.interface';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateRoomResponse } from '@/proto/room/CreateRoomResponse';
import { UserService } from '../user/user.service';
import { FindRoomByQuery } from './dto/find-room-byUser';
import { CurrentUserService } from '@/utils/current-user';
import { IPaginated } from '@/utils/buildFilterSortAndPaginate';

interface GrpcRoomService {
  Create(body: CreateRoomDto): Observable<CreateRoomResponse>;
  FindAllRoom(query: FindRoomByQuery): Observable<IPaginated<IRoom>>;
}

@Injectable()
export class RoomService {
  private roomService: GrpcRoomService;
  constructor(@Inject('ROOM_PACKAGE') private readonly userClient: ClientGrpc,
    private readonly userService: UserService,
    private currentUserService: CurrentUserService
  ) {
    this.roomService = this.userClient.getService<GrpcRoomService>('RoomService');
  }

  async create(createRoomDto: CreateRoomDto) {
    const currentUser = this.currentUserService.getUser()
    const hasUser = await this.userService.hasUsers(createRoomDto.members);
    if (!hasUser) throw new BadRequestException("Người dùng không tồn tại");
    const data = this.roomService.Create({ ...createRoomDto, creator_id: `${currentUser?.id}` });
    const result = await firstValueFrom(data);
    return result;
  }

  async findAll(query: FindRoomByQuery): Promise<IPaginated<IRoom>> {
    const currentUser = this.currentUserService.getUser()
    if (currentUser) {
      const data = this.roomService.FindAllRoom({ ...query, idUser: currentUser?.id });
      const result = await firstValueFrom(data);
      return result;
    }
    return {
      datas: [],
      limit: 10,
      page: 1,
      totalPages: 0,
      totalResults: 0
    }
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
