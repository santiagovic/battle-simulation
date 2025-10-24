import { NatureData, PokemonData, TypesData } from '../interfaces/pokemonData'
import { AttackData } from '../interfaces/attackData'
import { ItemData } from '../interfaces/itemData'
import { StatsData } from '../interfaces/pokemonData'
import { ConditionData } from '../interfaces/pokemonData'
import { AbilityData } from '../interfaces/pokemonData'


export class Pokemon {
    name: string;
    nickname: string;
    level: number;
    heldItem: ItemData;
    usedItem: ItemData;
    type: TypesData[];
    attacks: AttackData[];
    stats: StatsData;
    nature: NatureData;
    ability: AbilityData;

    constructor(data: PokemonData) {
        this.name = data.name;
        this.nickname = data.nickname;
        this.level = data.level;
        this.type = Array.isArray(data.type) ? data.type : [data.type];
        this.attacks = data.attacks;
        this.stats = data.stats;
        this.nature = data.nature;
        this.ability = data.ability;
        this.heldItem = data.heldItem;
        this.usedItem = data.usedItem;
    }

    atacar(choosenAttack: AttackData, pokeEnemie: Pokemon) {
        const attack = choosenAttack;
        const lifeBar = pokeEnemie.stats.hp;

        choosenAttack
    }
}

export class Nature {
    name: string;
    buffStats: object;
    nerfStats: object;
    favfood: object;
    hatedfood: object;

    constructor(data: NatureData) {
        this.name = data.name;
        this.buffStats = data.buffStats;
        this.nerfStats = data.nerfStats;
        this.favfood = data.favfood;
        this.hatedfood = data.hatedfood;
    }
}

export class Type {
    name: string;
    symbol: string;
    superEfective: object;
    notVeryEffective: object;
    hasNoEffect: object;
    noAdvantage: object;

    constructor(data: TypesData) {
        this.name = data.name
        this.symbol = data.symbol
        this.superEfective = data.superEfective;
        this.notVeryEffective = data.notVeryEffective;
        this.hasNoEffect = data.hasNoEffect;
        this.noAdvantage = data.noAdvantage;
    }
}


export class Condition {
    name: string;
    effect: object;

    constructor(data: ConditionData) {
        this.name = data.name;
        this.effect = data.effect;
    }
}

export class Ability {
    name: string;
    effect: object;

    constructor(data: AbilityData){
        this.name = data.name;
        this.effect = data.effect;

    }
}