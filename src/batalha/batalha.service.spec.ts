import { Test, TestingModule } from '@nestjs/testing';
import { BatalhaService } from './batalha.service';

describe('BatalhaService', () => {
  let service: BatalhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BatalhaService],
    }).compile();

    service = module.get<BatalhaService>(BatalhaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
