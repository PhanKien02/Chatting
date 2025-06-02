import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn({
        unsigned: true,
        type: 'bigint',
    })
    id: number;

    @CreateDateColumn({ type: 'timestamp' })
    created_at?: Date;
    @CreateDateColumn({ type: 'timestamp' })
    updated_at?: Date;
    @Column({ type: 'date', default: null })
    deleted_at?: Date;
}
