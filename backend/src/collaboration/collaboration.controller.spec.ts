import { Test, TestingModule } from '@nestjs/testing';
import { CollaborationController } from './collaboration.controller';
import { CollaborationService } from './collaboration.service';

describe('CollaborationController', () => {
  let controller: CollaborationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollaborationController],
      providers: [CollaborationService],
    }).compile();

    controller = module.get<CollaborationController>(CollaborationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
