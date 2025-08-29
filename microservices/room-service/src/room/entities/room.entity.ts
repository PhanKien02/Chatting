
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type RoomDocument = HydratedDocument<Room>;
@Schema()
export class Room {
        id: ObjectId;
        @Prop()
        creator_id: string;
        @Prop([String])
        members: string[];
        @Prop()
        status: boolean;
        @Prop()
        type: string;
        @Prop()
        created_at: Date;
        @Prop()
        updated_at: Date;
        @Prop()
        deleted_at: Date;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
