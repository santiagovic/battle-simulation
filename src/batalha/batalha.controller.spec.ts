import { Test, TestingModule } from '@nestjs/testing';
import { BatalhaController } from './batalha.controller';
import { BatalhaService } from './batalha.service';

describe('BatalhaController', () => {
  let controller: BatalhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BatalhaController],
      providers: [BatalhaService],
    }).compile();

    controller = module.get<BatalhaController>(BatalhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
