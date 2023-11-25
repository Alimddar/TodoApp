import { Test, TestingModule } from '@nestjs/testing';
import { TaskAttachmentController } from './task-attachment.controller';
import { TaskAttachmentService } from './task-attachment.service';

describe('TaskAttachmentController', () => {
  let controller: TaskAttachmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskAttachmentController],
      providers: [TaskAttachmentService],
    }).compile();

    controller = module.get<TaskAttachmentController>(TaskAttachmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
