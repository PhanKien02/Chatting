import { BaseEntity } from "@/common/base.entity";
import { Book } from "@/modules/book/entities/book.entity";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from 'mongoose';

@Schema()
export class Topic extends BaseEntity {
    @Prop({
        index: 'text'
    })
    name: string;

    @Prop()
    color: string;


    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }] })
    books: Book[]
}

export type TopicDocument = HydratedDocument<Topic>;

export const TopicSchema = SchemaFactory.createForClass(Topic);