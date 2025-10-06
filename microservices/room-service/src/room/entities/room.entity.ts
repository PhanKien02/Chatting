
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type RoomDocument = HydratedDocument<Room>;
@Schema()
export class Room {
        id: ObjectId;
        @Prop({
                index: 1
        })
        creator_id: number;
        @Prop({
                index: "text"
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
        isGroup: boolean;
        @Prop()
        created_at: Date;
        @Prop()
        updated_at: Date;
        @Prop()
        deleted_at: Date;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
