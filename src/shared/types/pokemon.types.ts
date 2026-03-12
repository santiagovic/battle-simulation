import { AttackData } from './attack.types';
import { ItemData } from './item.types';
import { TypeData } from './type.types';
import { ConditionData } from './condition.types';

export interface PokemonData {
    name: string;
    nickname: string;
    level: number;
    heldItem?: ItemData;
    usedItem?: ItemData;
    type: TypeData;
    attacks: AttackData[];
    status: StatusData;
    nature: NatureData;
    sprites: object;
    fainted: boolean;
    condition?: ConditionData;
}

export interface NatureData {
    name: string;
    buffStatus: keyof StatusData | null;
    nerfStatus: keyof StatusData | null;
}

export interface StatusData {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
}
