import { PokemonData, StatusData } from '../../shared/types/pokemon.types';
import { ItemData } from '../../shared/types/item.types';

import { Attack } from './attack.entity';
import { Item } from './item.entity';
import { Type } from './types.entity';
import { Nature } from './nature.entity';
import { Condition } from './condition.entity';
import { PokemonService } from '../pokemon.service';


export class Pokemon {
    name: string;
    nickname: string;
    level: number;
    heldItem: ItemData | null;
    usedItem: ItemData | null = null;
    type: Type[];
    attacks: Attack[];
    status: StatusData;
    nature: Nature;
    sprites: object;
    fainted: boolean = false;
    condition: Condition | null = null;
    pokemonService: any;

    constructor(data: PokemonData) {
        this.name = data.name;
        this.nickname = data.nickname;
        this.level = data.level;
        this.type = (Array.isArray(data.type) ? data.type : [data.type]).map(t => new Type(t));
        this.attacks = (Array.isArray(data.attacks) ? data.attacks : [data.attacks]).map(a => new Attack(a));
        this.status = data.status;
        this.nature = new Nature(data.nature);
        this.heldItem = data.heldItem ? new Item(data.heldItem) : null;
        this.sprites = data.sprites;
        this.condition = data.condition ? new Condition(data.condition) : null;
    }

    useAttack(chosenAttackPosition: number, pokemonDefender: Pokemon) {
        const selectedAttack: Attack | undefined = this.attacks.find(attack => attack.position === chosenAttackPosition);

        if (selectedAttack) {
            let atk: number;
            let def: number;
            let attackCategory: string = selectedAttack.category;

            if (selectedAttack.pp > 0) {
                this.pokemonService.subtractAttackerPP(selectedAttack);

                if (attackCategory === 'physical') {

                    [atk, def] = this.pokemonService.defineAttackDefenseStats(this, pokemonDefender, selectedAttack);

                    let typeMatchForSTAB: boolean = this.pokemonService.checkTypeMatchSTAB(this, selectedAttack);
                    const stab: number = typeMatchForSTAB == true ? 1.5 : 1;

                    const damage: number = this.pokemonService.calculateDamage(this, pokemonDefender, selectedAttack, atk, def, stab);
                    pokemonDefender.takeDamage(damage); //calcular variavel do heldItem
                }

                else if (attackCategory === 'status') {
                    this.pokemonService.applyAttackEffect(this, pokemonDefender, selectedAttack);
                }
            }
        }
    }

    takeDamage(damage: number) {
        this.status.hp -= damage;

        if (this.status.hp <= 0) {
            this.fainted = true;
            this.status.hp = 0;
            return "O pokémon desmaiou."
            //criar e chamar metodo de encerrar batalha quando desmaiar
        }
    }

    useItem() {
        if (this.usedItem) {
            if (this.usedItem.consumable) {
                const statusToModify: keyof StatusData = this.usedItem.effect.affectedStatus;
                const itemEffectValue: number = this.usedItem.effect.value;

                this.status[statusToModify] += itemEffectValue;

                const itemName = this.usedItem.name;
                this.usedItem = null;
                return `Você usou 1 ${itemName}.`
            }
        }
    }
}
