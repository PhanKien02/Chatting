import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type ConversationDocument = HydratedDocument<Conversation>;
@Schema()
export class Conversation {
        id: ObjectId;
        @Prop({
                index: 1
        })
        creator_id: number;

        @Prop({
                index: "text",
        })
        name: string;

        @Prop({
                index: 1,
                type: mongoose.Schema.Types.Array
        })
        members: number[];

        @Prop({
                index: -1,
                default: true
        })
        status: boolean;

        @Prop()
        avatar: string;

        @Prop()
        isGroup: boolean;

        @Prop()
        created_at: Date;

        @Prop()
        updated_at: Date;

        @Prop()
        deleted_at: Date;
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
