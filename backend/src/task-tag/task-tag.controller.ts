import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskTagService } from './task-tag.service';
import { CreateTaskTagDto } from './dto/create-task-tag.dto';
import { UpdateTaskTagDto } from './dto/update-task-tag.dto';

@Controller('task-tag')
export class TaskTagController {
  constructor(private readonly taskTagService: TaskTagService) {}

  @Post()
  create(@Body() createTaskTagDto: CreateTaskTagDto) {
    return this.taskTagService.create(createTaskTagDto);
  }

  @Get()
  findAll() {
    return this.taskTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskTagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskTagDto: UpdateTaskTagDto) {
    return this.taskTagService.update(+id, updateTaskTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskTagService.remove(+id);
  }
}
