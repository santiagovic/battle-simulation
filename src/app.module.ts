import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { ItemModule } from './item/item.module';
import { BatalhaModule } from './batalha/batalha.module';
import { BatalhaModule } from './batalha/batalha.module';
import { ItemModule } from './item/item.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [PokemonModule, BatalhaModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
