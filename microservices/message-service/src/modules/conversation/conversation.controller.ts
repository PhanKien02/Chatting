import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { GetConversationQuery } from './dto/get-conversation-query.dto';

@Controller()
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) { }

  @GrpcMethod('ConversationService', 'Create')
  create(@Payload() createConversationDto: CreateConversationDto) {
    return this.conversationService.create(createConversationDto);
  }
  @GrpcMethod('ConversationService', 'FindAllConversation')
  FindAllConversation(@Payload() query: GetConversationQuery) {
    return this.conversationService.findAll(query);
  }
}
