import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

import { Pokemon } from "./entities/pokemon.entity";
import { Type } from "./entities/types.entity";
import { Attack } from "./entities/attack.entity";
import { StatusData } from "../shared/types/pokemon.types";

@Injectable()
export class PokemonService {
    create(createPokemonDto: CreatePokemonDto) {
        return 'This action adds a new pokémon';
    }

    findAll() {
        return `This action returns all pokémon`;
    }

    findOne(id: number) {
        return `This action returns a #${id} pokémon`;
    }

    update(id: number, updatePokemonDto: UpdatePokemonDto) {
        return `This action updates a #${id} pokémon`;
    }

    remove(id: number) {
        return `This action removes a #${id} pokémon`;
    }

    calculateResistance(selectedAttack: Attack, enemyTypes: Type[]): number {
        let attackType = selectedAttack.type;
        let multiplier: number = 1;

        for (let defenderType of enemyTypes) {
            let defenderTypeName = defenderType.name;

            if (attackType.doublesDamageAgainst && attackType.doublesDamageAgainst.includes(defenderTypeName)) {
                multiplier *= 2;
            }

            if (attackType.halfDamageAgainst && attackType.halfDamageAgainst.includes(defenderTypeName)) {
                multiplier *= 0.5;
            }

            if (attackType.noDamageAgainst && attackType.noDamageAgainst.includes(defenderTypeName)) {
                multiplier *= 0;
            }
        }
        return multiplier;
    }


    calculateCritical(criticalChance: number): number {
        let randomNumber: number = Math.random() * 100;
        return randomNumber < criticalChance ? 1.5 : 1;
    }


    subtractAttackerPP(selectedAttack: Attack): Number {
        return selectedAttack.pp -= 1;
    }


    defineAttackDefenseStats(pokemonAttacker: Pokemon, pokemonDefender: Pokemon, selectedAttack: Attack): [number, number] {
        return selectedAttack.category == 'physical'
            ? [pokemonAttacker.status.attack, pokemonDefender.status.defense]
            : [pokemonAttacker.status.spAttack, pokemonDefender.status.spDefense];
    }

    applyAttackEffect(pokemonAttacker: Pokemon, pokemonDefender: Pokemon, selectedAttack: Attack): string {
        let effect: { affectedStatus: keyof StatusData, value: number, target: string } = selectedAttack.effect;
        let effectValue: number = effect.value;
        let effectTarget: string = effect.target;

        if (effectTarget === 'user') {
            pokemonAttacker.status[effect.affectedStatus] += effectValue;
            return `Status de ${pokemonAttacker.status[effect.affectedStatus]} foi aumentado.`
        }
        else {
            pokemonDefender.status[effect.affectedStatus] += effectValue;
            return `Status de ${pokemonDefender.status[effect.affectedStatus]} foi ${effect.value < 0 ? 'diminuido' : 'aumentado'}.`
        }
    }

    checkTypeMatchSTAB(pokemonAttacker: Pokemon, selectedAttack: Attack): boolean {
        return pokemonAttacker.type.some(type => type.name == selectedAttack.type.name);
    }

    //((((2 * LEVEL / 5 + 2) * ATKSTAT * ATKPOWER / DEFSTAT) / 50) + 2) * STAB * WEAKNESS_RESISTANCE * CRITICAL * OTHER * (MARGIN / 100)

    calculateDamage(pokemonAttacker: Pokemon, pokemonDefender: Pokemon, selectedAttack: Attack, atk: number, def: number, stab: number): number {
        return ((((2 * pokemonAttacker.level / 5 + 2) * atk * selectedAttack.power / def) / 50) + 2) * stab * this.calculateCritical(selectedAttack.critical) * this.calculateResistance(selectedAttack, pokemonDefender.type);
    }
}

