import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { ItemModule } from './item/item.module';
import { BattleModule } from './battle/battle.module';

@Module({
  imports: [PokemonModule, BattleModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
