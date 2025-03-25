import { Controller, Get, Post, Body, Param, Logger, Put, Query, Delete } from '@nestjs/common';
import { TopicService } from './topic.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { convertToObjectId } from '@/utils/convertToObjectId';
import { IResponse } from '@/interfaces/response.interface';
import { Topic } from './entities/topic.entity';
import { IPaginated, IQuery } from '@/interfaces/paging.interface';

@Controller('topic')
export class TopicController {
    constructor(private readonly topicService: TopicService) { }
    private readonly logger = new Logger(TopicService.name, {
        timestamp: true,
    });
    @Post()
    create(@Body() createTopicDto: CreateTopicDto) {
        this.logger.log(`create topic ${createTopicDto.name}`);
        return this.topicService.create(createTopicDto);
    }

    @Get()
    async findAll(@Query() query: IQuery<Topic>): Promise<IResponse<IPaginated<Topic>>> {
        this.logger.log(`get all topic`);
        const data = await this.topicService.findAllTopic(query);
        return {
            data,
            message: 'get all topic success'
        }
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTopicDto: UpdateTopicDto) {
        this.logger.log(`update topic ${id}`);
        return this.topicService.update(convertToObjectId(id), updateTopicDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string,) {
        this.logger.log(`delete topic ${id}`);
        return this.topicService.remove(convertToObjectId(id));
    }

}
