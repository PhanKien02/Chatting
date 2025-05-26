import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";
import { RoleType } from "../enum/role-type";

@Entity()
export class UserEntity extends BaseEntity {
    @Column({
        unique: true,
        nullable: false
    })
    email: string;

    @Column()
    password: string;

    @Column()
    fullName: string;

    @Column()
    isActive: boolean;

    @Column({
        length: 10
    })
    phone: string;

    @Column()
    avatarUrl?: string;

    @Column()
    resetKey: string;

    @Column({
        nullable: false,
    })
    activeKey: string;

    @Column({
        type: "enum",
        enum: RoleType,
        default: RoleType.USER,
    })
    role: RoleType;
}