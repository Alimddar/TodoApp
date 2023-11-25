import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskAttachmentDto } from './create-task-attachment.dto';

export class UpdateTaskAttachmentDto extends PartialType(CreateTaskAttachmentDto) {}
