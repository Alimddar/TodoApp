import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskAttachmentService } from './task-attachment.service';
import { CreateTaskAttachmentDto } from './dto/create-task-attachment.dto';
import { UpdateTaskAttachmentDto } from './dto/update-task-attachment.dto';

@Controller('task-attachment')
export class TaskAttachmentController {
  constructor(private readonly taskAttachmentService: TaskAttachmentService) {}

  @Post()
  create(@Body() createTaskAttachmentDto: CreateTaskAttachmentDto) {
    return this.taskAttachmentService.create(createTaskAttachmentDto);
  }

  @Get()
  findAll() {
    return this.taskAttachmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskAttachmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskAttachmentDto: UpdateTaskAttachmentDto) {
    return this.taskAttachmentService.update(+id, updateTaskAttachmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskAttachmentService.remove(+id);
  }
}
