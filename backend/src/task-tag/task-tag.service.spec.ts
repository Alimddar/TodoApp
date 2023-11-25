import { Test, TestingModule } from '@nestjs/testing';
import { TaskTagService } from './task-tag.service';

describe('TaskTagService', () => {
  let service: TaskTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskTagService],
    }).compile();

    service = module.get<TaskTagService>(TaskTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
