import { AfterInsert, BeforeInsert, BeforeUpdate, Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";
import { RoleType } from "../enum/role-type";
import { genKeyOTP } from "src/utils/gennerateKey";
import { hashPassword } from "src/utils/hashPass";

@Entity({
    name: "users",
})
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

    @Column({
        default: false
    })
    isActive: boolean;

    @Column({
        length: 10
    })
    phone: string;

    @Column()
    avatarUrl?: string;

    @Column({
        default: null
    })
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