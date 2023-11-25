import { Test, TestingModule } from '@nestjs/testing';
import { TaskAttachmentService } from './task-attachment.service';

describe('TaskAttachmentService', () => {
  let service: TaskAttachmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskAttachmentService],
    }).compile();

    service = module.get<TaskAttachmentService>(TaskAttachmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
