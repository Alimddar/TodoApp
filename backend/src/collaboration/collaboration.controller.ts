import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CollaborationService } from './collaboration.service';
import { CreateCollaborationDto } from './dto/create-collaboration.dto';
import { UpdateCollaborationDto } from './dto/update-collaboration.dto';

@Controller('collaboration')
export class CollaborationController {
  constructor(private readonly collaborationService: CollaborationService) {}

  @Post()
  create(@Body() createCollaborationDto: CreateCollaborationDto) {
    return this.collaborationService.create(createCollaborationDto);
  }

  @Get()
  findAll() {
    return this.collaborationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collaborationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollaborationDto: UpdateCollaborationDto) {
    return this.collaborationService.update(+id, updateCollaborationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collaborationService.remove(+id);
  }
}
