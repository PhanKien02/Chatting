import { Prop } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";

export abstract class BaseEntity {
    _id: ObjectId;
    @Prop()
    created_at?: Date;
    @Prop()
    updated_at?: Date;
    @Prop()
    deleted_at?: Date;
}
