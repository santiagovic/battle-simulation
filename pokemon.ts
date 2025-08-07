class Pokemon {
    nome: string;
    apelido: string;
    hp: number;
    level: number;
    item: object;
    types: object;
    attacks: object;
    stats: object;
    nature: object;

    ataqueEscolhido: object;
    pokAdversario: object;

    constructor(nome: string, apelido = nome, hp, level, item, types, attacks, stats, nature) {
        this.nome = nome;
        this.apelido = apelido;
        this.hp = hp;
        this.level = level;
        this.types = types;
        this.attacks = attacks;
        this.stats = stats;
        this.nature = nature;
        this.item = item;
    }

    atacar(ataqueEscolhido, pokAdversario) {
        const ataque = ataqueEscolhido;
        const vida = pokAdversario.
            ataqueEscolhido.valor

    }


}

class Nature {
    nome: string;
    buff: object;
    nerf: object;
    favfood: object;
    hatedfood: object;

    constructor(nome, buff, nerf, favfood, hatedfood) {
        this.nome = nome;
        this.buff = buff;
        this.nerf = nerf;
        this.favfood = favfood;
        this.hatedfood = hatedfood;
    }
}

class Tipos {
    nome: string;
    symbol: object;
    superEfective: object;
    notVeryEffective: object;
    hasNoEffect: object;
    noAdvantage: object;

    constructor(nome, symbol, superEfective, notVeryEffective, hasNoEffect, noAdvantage) {
        this.nome = nome
        this.symbol = symbol
        this.superEfective = superEfective;
        this.notVeryEffective = notVeryEffective;
        this.hasNoEffect = hasNoEffect;
        this.noAdvantage = noAdvantage;
    }
}