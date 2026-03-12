import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

import { Pokemon } from "./entities/pokemon.entity";
import { Type } from "./entities/types.entity";
import { Attack } from "./entities/attack.entity";
import { StatusData } from "../shared/types/pokemon.types";
import { Item } from './entities/item.entity';

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
        let randomNumber: number = Math.random();
        return randomNumber < criticalChance ? 1.5 : 1;
    }


    subtractAttackerPP(selectedAttack: Attack): void {
        selectedAttack.pp -= 1;
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

    executePhysicalAttack(pokemonAttacker: Pokemon, pokemonDefender: Pokemon, selectedAttack: Attack) {
        let atk: number;
        let def: number;

        [atk, def] = this.defineAttackDefenseStats(pokemonAttacker, pokemonDefender, selectedAttack);

        let typeMatchForSTAB: boolean = this.checkTypeMatchSTAB(pokemonAttacker, selectedAttack);
        const stab: number = typeMatchForSTAB == true ? 1.5 : 1;

        const damage: number = this.calculateDamage(pokemonAttacker, pokemonDefender, selectedAttack, atk, def, stab);
        this.takeDamage(pokemonDefender, damage); //calcular variavel do heldItem
    }

    useAttack(pokemonAttacker: Pokemon, selectedAttack: Attack, pokemonDefender: Pokemon) {
        if (selectedAttack) {
            let attackCategory: string = selectedAttack.category;

            if (selectedAttack.pp > 0) {
                this.subtractAttackerPP(selectedAttack);

                if (attackCategory === 'physical') {
                    this.executePhysicalAttack(pokemonAttacker, pokemonDefender, selectedAttack)
                }

                else if (attackCategory === 'status') {
                    this.applyAttackEffect(pokemonAttacker, pokemonDefender, selectedAttack);
                }
            }
        }
    }

    //undefined para prevenir que retorne zero ataques, erro silencioso
    defineRandomAttackByNPC(pokemonAttacker: Pokemon): Attack | undefined {
        const availableAttacks: Attack[] = pokemonAttacker.attacks.filter(attack => attack.pp > 0);
        const randomIndex: number = Math.floor(Math.random() * availableAttacks.length)
        return availableAttacks[randomIndex]
    }

    takeDamage(pokemonDefender: Pokemon, damage: number) {
        pokemonDefender.status.hp -= damage;

        if (pokemonDefender.status.hp <= 0) {
            pokemonDefender.fainted = true;
            pokemonDefender.status.hp = 0;
            return "O pokémon desmaiou."
            //criar e chamar metodo de encerrar batalha quando desmaiar
        }
    }

    useItem(pokemonAttacker: Pokemon) {
        if (pokemonAttacker.usedItem) {
            if (pokemonAttacker.usedItem.consumable) {
                const statusToModify: keyof StatusData = pokemonAttacker.usedItem.effect.affectedStatus;
                const itemEffectValue: number = pokemonAttacker.usedItem.effect.value;

                pokemonAttacker.status[statusToModify] += itemEffectValue;

                const itemName = pokemonAttacker.usedItem.name;
                pokemonAttacker.usedItem = null;
                return `Você usou 1 ${itemName}.`
            }
        }
    }
}


