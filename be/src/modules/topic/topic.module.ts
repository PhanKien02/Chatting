import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { Topic, TopicSchema } from './entities/topic.entity';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
    imports: [MongooseModule.forFeature([{ name: Topic.name, schema: TopicSchema }])],
    controllers: [TopicController],
    providers: [TopicService],
})
export class TopicModule { }
