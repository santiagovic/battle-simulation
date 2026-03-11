import { Module } from '@nestjs/common';
import { BatalhaService } from './batalha.service';
import { BatalhaController } from './batalha.controller';

@Module({
  controllers: [BatalhaController],
  providers: [BatalhaService],
})
export class BatalhaModule {}
