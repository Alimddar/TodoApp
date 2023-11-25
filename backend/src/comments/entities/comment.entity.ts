import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task_id: number;

    @Column()
    user_id: number;

    @Column()
    comment: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}
