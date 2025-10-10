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

@Injectable()
export class ConversationService {
  constructor(@InjectModel(Conversation.name) private conversationModel: Model<Conversation>) { }
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
      }).limit(query.limit || 10).skip((query.page - 1) * query.limit || 0),
      this.conversationModel.countDocuments(filter)
    ])
    return paginateResponse({ datas: conversations, limit, page, totalResults })
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
