import { Test, TestingModule } from '@nestjs/testing';
import { TaskTagController } from './task-tag.controller';
import { TaskTagService } from './task-tag.service';

describe('TaskTagController', () => {
  let controller: TaskTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskTagController],
      providers: [TaskTagService],
    }).compile();

    controller = module.get<TaskTagController>(TaskTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
