import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";
import { RoleType } from "../enum/role-type";

@Entity({
        name: "auths",
})
export class Auth extends BaseEntity {
        @Column({
                unique: true,
                nullable: false,
                type: "bigint"
        })
        idUser: number;

        @Column({
                unique: true,
                nullable: false
        })
        email: string;

        @Column()
        password: string;

        @Column({
                default: false
        })
        refreshToken: string;

        @Column({
                default: false
        })
        accessToken: string;

        @Column({
                default: false
        })
        isActive: boolean;

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
