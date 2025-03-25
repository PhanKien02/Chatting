import { BaseEntity } from '@/common/base.entity';
import { ELanguage } from './language-enum';
import { Topic } from '@/modules/topic/entities/topic.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Book extends BaseEntity {

    @Prop({
        index: 'text'
    }
    )
    title: string;

    @Prop({
        index: 'text'
    })
    author: string;


    @Prop()
    description: string;

    @Prop()
    fileUrl: string;

    @Prop()
    imageUrl: string

    @Prop()
    language: string;

    @Prop({
        default: 0
    })
    countRead: number

    @Prop({
        default: 0
    })
    countLike: number
}

export type BookDocument = HydratedDocument<Book>;
export const BookSchema = SchemaFactory.createForClass(Book); 