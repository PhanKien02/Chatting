import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { firstValueFrom, Observable } from 'rxjs';
import { ClientGrpc } from '@nestjs/microservices';
import { UserService } from '../user/user.service';
import { CurrentUserService } from '@/utils/current-user';
import { IPaginated } from '@/utils/buildFilterSortAndPaginate';
import { CreateConversationDto } from '../conversation/dto/create-conversation.dto';
import { IConversation } from '@/interfaces/conversation.interface';
import { FindConversationByQuery } from '../conversation/dto/find-conversation-byUser';
import { UpdateConversationDto } from '../conversation/dto/update-conversation.dto';

interface GrpcRoomService {
  Create(body: CreateConversationDto): Observable<{}>;
  FindAllRoom(query: FindConversationByQuery): Observable<IPaginated<IConversation>>;
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

  async create(createRoomDto: CreateConversationDto) {
    const currentUser = this.currentUserService.getUser()
    const hasUser = await this.userService.hasUsers(createRoomDto.members);
    if (!hasUser) throw new BadRequestException("Người dùng không tồn tại");
    const data = this.roomService.Create({ ...createRoomDto, creator_id: `${currentUser?.id}` });
    const result = await firstValueFrom(data);
    return result;
  }

  async findAll(query: FindConversationByQuery): Promise<IPaginated<IConversation>> {
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

  update(id: number, updateRoomDto: UpdateConversationDto) {
    return updateRoomDto;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
