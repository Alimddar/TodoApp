import { PartialType } from '@nestjs/mapped-types';
import { CreateSubtaskDto } from './create-subtask.dto';

export class UpdateSubtaskDto extends PartialType(CreateSubtaskDto) {}
