import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { FindConversationByQuery } from './dto/find-conversation-byUser';
import { AuthGuard } from '@/security/guards/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) { }

  @Post()
  create(@Body() createConversationDto: CreateConversationDto) {
    return this.conversationService.create(createConversationDto);
  }

  @Get()
  findAll(@Query() query: FindConversationByQuery) {
    return this.conversationService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conversationService.findOne(+id);
  }
}
