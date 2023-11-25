import { Test, TestingModule } from '@nestjs/testing';
import { CollaborationService } from './collaboration.service';

describe('CollaborationService', () => {
  let service: CollaborationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollaborationService],
    }).compile();

    service = module.get<CollaborationService>(CollaborationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
