import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  priority: string;

  @Column()
  status: boolean;

  @Column()
  dueDate: Date;

  @Column()
  user_id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column()
  updated_at: Date;
}
