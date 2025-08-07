class Pokemon {
    constructor(name, hp, level, types, attacks, stats, nature) {
        this.name = name;
        this.hp = hp;
        this.level = level;
        this.types = types;
        this.attacks = attacks;
        this.stats = stats;
        this.nature = nature;
    }
}

class Nature {
    constructor(name, buff, nerf, favfood, hatedfood) {
        this.name = name;
        this.buff = buff;
        this.nerf = nerf;
        this.favfood = favfood;
        this.hatedfood = hatedfood;
    }
}

class Types {
    constructor(name, symbol, superEfective, notVeryEffective, hasNoEffect, noAdvantage) {
        this.name = name
        this.symbol = symbol
        this.superEfective = superEfective;
        this.notVeryEffective = notVeryEffective;
        this.hasNoEffect = hasNoEffect;
        this.noAdvantage = noAdvantage;
    }
}