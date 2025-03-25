import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RoleType } from './role-type';
import { BaseEntity } from '@/common/base.entity';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User extends BaseEntity {
    @Prop({
        isRequired: true,
        index: 'text'
    })
    email: string;

    @Prop()
    password: string;

    @Prop({
        index: 'text'
    })
    fullName: string;

    @Prop()
    isActive: boolean;

    @Prop({
        length: 10,
        isRequired: true,
        index: 'text'
    })
    phone: string;

    @Prop()
    avatarUrl?: string;

    @Prop()
    resetKey: string;

    @Prop()
    activeKey: string;

    @Prop({
        enum: RoleType,
        default: RoleType.USER,
    })
    role: string;
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);