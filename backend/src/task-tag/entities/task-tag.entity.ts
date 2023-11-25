import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class TaskTag {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    task_id: number;

    @Column()
    tag: string;
}
