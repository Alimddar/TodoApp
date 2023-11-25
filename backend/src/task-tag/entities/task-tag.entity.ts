import { Column, PrimaryGeneratedColumn } from 'typeorm';
export class TaskTag {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    task_id: number;

    @Column()
    tag: string;
}
