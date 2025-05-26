import { Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn({
        unsigned: true,
        type: 'bigint',
    })
    id: number;

    @Column({
        type: 'timestamp',
    })
    created_at?: Date;
    @Column({
        type: 'timestamp',
    })
    updated_at?: Date;
    @Column({
        type: 'timestamp',
    })
    deleted_at?: Date;
}
