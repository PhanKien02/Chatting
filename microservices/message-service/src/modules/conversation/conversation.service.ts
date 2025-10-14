import { Injectable } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { paginateResponse } from 'src/utils/buildFilterSortAndPaginate';
import { InjectModel } from '@nestjs/mongoose';
import { Conversation } from './entities/conversation.entity';
import { Model } from 'mongoose';
import { GetConversationQuery } from './dto/get-conversation-query.dto';
import { normalize } from '../../utils/normalize';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { IResponseRabbitmq } from '@/interfaces/rabbitmq.interface';
import { IUser } from '@/interfaces/user.interface';

@Injectable()
export class ConversationService {
  constructor(
    @InjectModel(Conversation.name) private conversationModel: Model<Conversation>,
    private readonly amqpConnection: AmqpConnection,) { }
  async create(createConversationDto: CreateConversationDto) {
    const result = await this.conversationModel.create(createConversationDto);
    return result;
  }

  async findAll(query: GetConversationQuery) {
    const { limit, page, searchKeyword, idUser } = query;
    const filter = {};
    if (searchKeyword) {
      filter["$text"] = { $search: normalize(query.searchKeyword) }
    }
    const [conversations, totalResults] = await Promise.all([
      this.conversationModel.find({
        ...filter,
        $or: [
          { members: idUser },
          { creator_id: idUser }
        ]
      }).limit(query.limit || 10).skip((query.page - 1) * query.limit || 0).lean(),
      this.conversationModel.countDocuments(filter)
    ]);

    const datas = await Promise.all(
      conversations.map(async (conversation) => {
        // Nếu là group chat => bỏ qua luôn
        if (conversation.isGroup) return conversation;

        const idUser = conversation.members.find((e) => e !== query.idUser);
        if (!idUser) return conversation; // tránh undefined

        try {
          const response = await this.amqpConnection.request<IResponseRabbitmq<IUser>>({
            exchange: 'user_exchange',
            routingKey: 'user.find.one',
            payload: Buffer.from(JSON.stringify({ id: idUser })),
          });

          if (response.success && response.message?.avatarUrl) {
            return {
              ...conversation,
              avatar: response.message.avatarUrl,
            };
          }

          return conversation;
        } catch (error) {
          // Nếu có lỗi RabbitMQ thì log nhẹ và giữ nguyên conversation
          console.error(`Failed to fetch user ${idUser}:`, error);
          return conversation;
        }
      })
    );

    return paginateResponse({ datas, limit, page, totalResults })
  }

  async findOne(_id: string) {
    const conversation = await this.conversationModel.findOne({ _id });
    if (!conversation)
      throw new RpcException({
        code: status.INVALID_ARGUMENT,
        message: "Phòng chat không tồn tại"
      })
    return conversation;
  }

  async update(id: string, updateConversationDto: UpdateConversationDto) {
    return await this.conversationModel.findByIdAndUpdate(id, updateConversationDto, { new: true })
  }

  remove(id: number) {
    return `This action removes a #${id} conversation`;
  }
}
