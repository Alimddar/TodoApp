import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Subtask {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task_id: number;

    @Column()
    title: string;

    @Column()
    status: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column()
    updated_at: Date;
}