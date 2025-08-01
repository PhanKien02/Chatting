import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({
        name: "auths",
})
export class Project extends BaseEntity {

        @Column({
                nullable: false,
        })
        name: string;
        @Column({
                unique: true,
                nullable: false,
                type: "bigint"
        })
        idUser?: number;

        @Column({
                nullable: false,
                default: true,
        })
        status: boolean;
}
