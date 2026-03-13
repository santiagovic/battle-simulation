import { Injectable } from '@nestjs/common';
import { Pokemon } from "../pokemon/entities/pokemon.entity";
import { Battle } from "./entities/battle.entity";
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
import { Condition } from 'src/pokemon/entities/condition.entity';
import { StatusData } from 'src/shared/types/pokemon.types';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { Attack } from 'src/pokemon/entities/attack.entity';

@Injectable()
export class BattleService {
    //injeção de dependências
    constructor(private pokemonService: PokemonService){}

    create(createBattleDto: CreateBattleDto) {
        return 'This action adds a new battle';
    }

    findAll() {
        return `This action returns all battle`;
    }

    findOne(id: number) {
        return `This action returns a #${id} battle`;
    }

    update(id: number, updateBattleDto: UpdateBattleDto) {
        return `This action updates a #${id} battle`;
    }

    remove(id: number) {
        return `This action removes a #${id} battle`;
    }

    //verifica qual velocidade é maior para definir atacante
    FastestPokemonInTurn(pokemonAttacker: Pokemon, pokemonDefender: Pokemon): Pokemon {
        const isAttackerFaster: boolean = pokemonAttacker.status.speed >= pokemonDefender.status.speed;
        return isAttackerFaster ? pokemonAttacker : pokemonDefender;
    }

    //aplica condição baseada na probabilidade
    applyCondition(battle: Battle, pokemon: Pokemon, condition: Condition) {
        const volatileRoll = Math.random();
    
        if (Array.isArray(condition.effects)) {

            //apaixonado
            if (condition.name === "apaixonado") {
                pokemon.condition = {...condition,
                remainingTurns: this.resetTurnsIfPokemonSwapped(battle)
                };
            }  

            for (let effect of condition.effects) {
                let randomNumber: number = Math.random();

                if (randomNumber < effect.probability) {
                    if (effect.name in pokemon.status) {
                        pokemon.status[effect.name as keyof StatusData] *= effect.value;
                    }
                }
            }
        }

        //confusão
        else if (condition.name === "confusão") {
            pokemon.condition = {
                ...condition,
                remainingTurns: this.randomRemainingTurns() //calcula na hora
            }
        }

        //outras condições
        else if (volatileRoll < condition.effects.probability) {
            if (condition.effects.method === "useAttack") {
                pokemon.condition = condition;
            }
        }
    }

    //usado na condição de confusão
    randomRemainingTurns(min: number = 1, max: number = 4): number | null {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //usado na condição de apaixonado
    resetTurnsIfPokemonSwapped(battle: Battle): number | null {
        return battle.pokemonSwapped ? 0 : null;
    }

    startBattle() {
        //texto inicial talvez

        //1 - verificar se naturezas ou habilidades afetam status na batalha

        //2 - abrir menu de op��es

        //3 - chamar metodo turno atual pela primeira vez
    }

    firstTurn(battle: Battle, attackUsed: Attack) {

        //1: define quem ataca primeiro pela velocidade
        const firstAttacker: Pokemon = this.FastestPokemonInTurn(battle.pokemon, battle.enemyPokemon);
        const firstDefender: Pokemon = firstAttacker === battle.pokemon ? battle.enemyPokemon : battle.pokemon

        //2: verifica se atacante possui condicao e aplicar baseado na probabilidade
        //aqui preciso trocar o aplly condition para outro metodo que valida condições que impendem o ataque, como paralisia, sono, etc. criar uma propriedade na condição para mapear, como tipo bloqueante ou continua
        if (firstAttacker.condition) {
            this.applyCondition(battle, firstAttacker, firstAttacker.condition);
        }

        //3: atacar
        this.pokemonService.useAttack(firstAttacker, attackUsed, firstDefender);

        //4: defensor usa metodo receber dano
        this.pokemonService.takeDamage(firstDefender, this.pokemonService.calculateDamage(firstAttacker, firstDefender, attackUsed));

        //5: fim do turno, verifica se alguem desmaiou
        this.verifyDefeat(battle);

        //6: aplica condições que sempre afetam o pokemon no final do turno, como queimadura, veneno, etc. criar uma propriedade na condição para mapear (bloqueante x continua)

        //7: recalcula e reseta condições temporarias se zerar
        this.pokemonService.calculateRemainingTurnsOfCondition(firstAttacker);
        
        //8: chama o segundo turno para inverter os pokemons
        this.secondTurn(firstAttacker, firstDefender) 
        //refatorar logica do turno pra evitar duplicidade de codigo
}

    flagPokemonSwapped(battle: Battle): void {
        battle.pokemonSwapped = true;
    }

    verifyDefeat(battle: Battle): boolean {
        return battle.pokemon.fainted || battle.enemyPokemon.fainted;
    }

    secondTurn(firstAttacker: Pokemon, firstDefender: Pokemon) {
        const secondAttacker: Pokemon = firstDefender;
        const secondDeffender: Pokemon = firstAttacker;
    
    
    
    }
    


}
