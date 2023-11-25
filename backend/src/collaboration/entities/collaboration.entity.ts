import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Collaboration {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task_id: number;

    @Column()
    user_id: number;

    @Column()
    role: string;
}