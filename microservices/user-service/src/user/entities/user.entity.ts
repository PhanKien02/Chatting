import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

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
    fullName: string;

    @Column({
        length: 10
    })
    phone: string;

    @Column()
    avatarUrl?: string;
}