import { Module } from '@nestjs/common';
import { TaskAttachmentService } from './task-attachment.service';
import { TaskAttachmentController } from './task-attachment.controller';

@Module({
  controllers: [TaskAttachmentController],
  providers: [TaskAttachmentService],
})
export class TaskAttachmentModule {}
