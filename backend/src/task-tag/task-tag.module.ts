import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskTag } from './entities/task-tag.entity';
import { TaskTagController } from './task-tag.controller';
import { TaskTagService } from './task-tag.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskTag])],
  controllers: [TaskTagController],
  providers: [TaskTagService],
})
export class TaskTagModule {}