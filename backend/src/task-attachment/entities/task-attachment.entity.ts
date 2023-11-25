import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class TaskAttachment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task_id: number;

    @Column()
    filePath: string;

    @Column()
    fileType: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}