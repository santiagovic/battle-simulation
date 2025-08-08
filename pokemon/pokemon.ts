import { Attack } from './attack.ts'

export class Pokemon {
    name: string;
    nickname: string;
    hp: number;
    level: number;
    item: object;
    type: object;
    attacks: Attack;
    stats: object;
    nature: object;

    constructor(name: string, nickname = name, hp: number, level: number, item: object, type: object, attacks: Attack, stats: object, nature: object) {
        this.name = name;
        this.nickname = nickname;
        this.hp = hp;
        this.level = level;
        this.type = type;
        this.attacks = attacks;
        this.stats = stats;
        this.nature = nature;
        this.item = item;
    }

    atacar(choosenAttack: Attack, pokeEnemie: Pokemon) {
        const attack = choosenAttack;
        const lifeBar = pokeEnemie.hp;

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
    symbol: object;
    superEfective: object;
    notVeryEffective: object;
    hasNoEffect: object;
    noAdvantage: object;

    constructor(name: string, symbol: object, superEfective: object, notVeryEffective: object, hasNoEffect: object, noAdvantage: object) {
        this.name = name
        this.symbol = symbol
        this.superEfective = superEfective;
        this.notVeryEffective = notVeryEffective;
        this.hasNoEffect = hasNoEffect;
        this.noAdvantage = noAdvantage;
    }
}