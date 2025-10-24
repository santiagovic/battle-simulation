import { AttackData } from './attackData'
import { ItemData } from './itemData';

export interface PokemonData {
    name: string;
    nickname: string;
    level: number;
    heldItem: ItemData;
    usedItem: ItemData;
    type: TypesData;
    attacks: AttackData[];
    stats: StatsData;
    nature: NatureData;
    ability: AbilityData;
}

export interface NatureData {
    name: string;
    buffStats: object;
    nerfStats: object;
    favfood: object;
    hatedfood: object;
}

export interface TypesData {
    name: string;
    symbol: string; //adicionar url
    superEfective: string[];
    notVeryEffective: string[];
    hasNoEffect: string[];
    noAdvantage: string[];
}

export interface StatsData {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
}

export interface ConditionData {
    name: string;
    effect: object;
}

export interface AbilityData {
    name: string;
    effect: object;
}
