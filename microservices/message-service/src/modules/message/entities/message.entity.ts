
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
import { TYPE_MESSAGE } from 'src/enum/type-message';

export type MessageDocument = HydratedDocument<Message>;
@Schema()
export class Message {


        id: ObjectId;
        @Prop()
        senderId: string;
        @Prop()
        roomId: string;
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
