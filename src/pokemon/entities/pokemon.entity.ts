import { PokemonData, StatusData } from '../../shared/types/pokemon.types';
import { ItemData } from '../../shared/types/item.types';

import { Attack } from './attack.entity';
import { Item } from './item.entity';
import { Type } from './types.entity';
import { Nature } from './nature.entity';
import { Condition } from './condition.entity';


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

    
}
