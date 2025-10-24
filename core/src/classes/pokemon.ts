import { TypesData } from '../interfaces/pokemonData'
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
    nature: object;
    ability: AbilityData;

    constructor(name: string, nickname:string = name, level: number, heldItem: ItemData, usedItem: ItemData, type: TypesData[], attacks: AttackData[], stats: StatsData, nature: object, ability: AbilityData) {
        this.name = name;
        this.nickname = nickname;
        this.level = level;
        this.type = type;
        this.attacks = attacks;
        this.stats = stats;
        this.nature = nature;
        this.ability = ability;
        this.heldItem = heldItem;
        this.usedItem = usedItem;
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

    constructor(name: string, buffStats: object, nerfStats: object, favfood: object, hatedfood: object) {
        this.name = name;
        this.buffStats = buffStats;
        this.nerfStats = nerfStats;
        this.favfood = favfood;
        this.hatedfood = hatedfood;
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