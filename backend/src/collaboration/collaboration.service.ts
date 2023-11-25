import { Injectable } from '@nestjs/common';
import { CreateCollaborationDto } from './dto/create-collaboration.dto';
import { UpdateCollaborationDto } from './dto/update-collaboration.dto';

@Injectable()
export class CollaborationService {
  create(createCollaborationDto: CreateCollaborationDto) {
    return 'This action adds a new collaboration';
  }

  findAll() {
    return `This action returns all collaboration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collaboration`;
  }

  update(id: number, updateCollaborationDto: UpdateCollaborationDto) {
    return `This action updates a #${id} collaboration`;
  }

  remove(id: number) {
    return `This action removes a #${id} collaboration`;
  }
}
