import { Module } from '@nestjs/common';
import { BattleService } from './battle.service';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { BattleController } from './battle.controller';

@Module({
  controllers: [BattleController],
  providers: [BattleService, PokemonService],
})
export class BattleModule {}
