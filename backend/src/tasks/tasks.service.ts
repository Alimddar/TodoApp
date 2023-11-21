import { Injectable } from '@nestjs/common';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService extends AbstractService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {
    super(taskRepository);
  }
}
