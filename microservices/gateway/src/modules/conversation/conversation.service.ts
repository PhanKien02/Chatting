import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { firstValueFrom, Observable } from 'rxjs';
import { IConversation } from '@/interfaces/conversation.interface';
import { ClientGrpc } from '@nestjs/microservices';
import { UserService } from '../user/user.service';
import { FindConversationByQuery } from './dto/find-conversation-byUser';
import { CurrentUserService } from '@/utils/current-user';
import { IPaginated } from '@/utils/buildFilterSortAndPaginate';

interface GrpcConversationService {
  Create(body: CreateConversationDto): Observable<{}>;
  FindAllConversation(query: FindConversationByQuery): Observable<IPaginated<IConversation>>;
}

@Injectable()
export class ConversationService {
  private conversationService: GrpcConversationService;
  constructor(@Inject('CONVERSATION_PACKAGE') private readonly userClient: ClientGrpc,
    private readonly userService: UserService,
    private currentUserService: CurrentUserService
  ) {
    this.conversationService = this.userClient.getService<GrpcConversationService>('ConversationService');
  }

  async create(createConversationDto: CreateConversationDto) {
    const currentUser = this.currentUserService.getUser()
    const hasUser = await this.userService.hasUsers(createConversationDto.members);
    if (!hasUser) throw new BadRequestException("Người dùng không tồn tại");
    const data = this.conversationService.Create({ ...createConversationDto, creator_id: `${currentUser?.id}` });
    const result = await firstValueFrom(data);
    return result;
  }

  async findAll(query: FindConversationByQuery): Promise<IPaginated<IConversation>> {
    const currentUser = this.currentUserService.getUser()
    if (currentUser) {
      const data = this.conversationService.FindAllConversation({ ...query, idUser: currentUser?.id });
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
    return `This action returns a #${id} conversation`;
  }

  update(id: number, updateConversationDto: UpdateConversationDto) {
    return updateConversationDto;
  }

  remove(id: number) {
    return `This action removes a #${id} conversation`;
  }
}
