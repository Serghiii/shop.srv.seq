import { Test, TestingModule } from '@nestjs/testing';
import { PropService } from './prop.service';

describe('PropService', () => {
  let service: PropService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropService],
    }).compile();

    service = module.get<PropService>(PropService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
