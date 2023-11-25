import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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