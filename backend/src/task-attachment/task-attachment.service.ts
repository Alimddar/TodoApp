import { Injectable } from '@nestjs/common';
import { CreateTaskAttachmentDto } from './dto/create-task-attachment.dto';
import { UpdateTaskAttachmentDto } from './dto/update-task-attachment.dto';

@Injectable()
export class TaskAttachmentService {
  create(createTaskAttachmentDto: CreateTaskAttachmentDto) {
    return 'This action adds a new taskAttachment';
  }

  findAll() {
    return `This action returns all taskAttachment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskAttachment`;
  }

  update(id: number, updateTaskAttachmentDto: UpdateTaskAttachmentDto) {
    return `This action updates a #${id} taskAttachment`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskAttachment`;
  }
}
