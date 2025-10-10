
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { TYPE_MESSAGE } from 'src/enum/type-message';
import { Conversation } from 'src/modules/conversation/entities/conversation.entity';

export type MessageDocument = HydratedDocument<Message>;
@Schema()
export class Message {

        @Prop()
        _id: ObjectId;

        @Prop()
        senderId: string;

        @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' })
        conversation: Conversation;

        @Prop()
        content: string;

        @Prop({
                enum: TYPE_MESSAGE,
                default: TYPE_MESSAGE.TEXT
        })
        typeMessage: TYPE_MESSAGE;

        @Prop()
        isRead: boolean;

        @Prop()
        created_at: Date;

        @Prop()
        updated_at: Date;

        @Prop()
        deleted_at: Date;
}
export const messageSchema = SchemaFactory.createForClass(Message);
