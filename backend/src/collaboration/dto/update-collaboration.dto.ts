import { PartialType } from '@nestjs/mapped-types';
import { CreateCollaborationDto } from './create-collaboration.dto';

export class UpdateCollaborationDto extends PartialType(CreateCollaborationDto) {}
