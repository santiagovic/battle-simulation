import { NaturezaData, PokemonData, TiposData, StatusData, CondicoesData, HabilidadeData } from '../interfaces/pokemonData'
import { ItemData } from '../interfaces/itemData'
import { Ataques } from './attack';

export class Pokemon {
    nome: string;
    apelido: string;
    level: number;
    heldItem: ItemData;
    usedItem: ItemData;
    tipo: Tipos[];
    ataques: Ataques[];
    status: StatusData;
    natureza: NaturezaData;
    habilidade: HabilidadeData;
    sprites: object;
    defeated: boolean = false;
    concicoes: CondicoesData = null;

    constructor(data: PokemonData) {
        this.nome = data.nome;
        this.apelido = data.apelido;
        this.level = data.level;
        this.tipo = Array.isArray(data.tipo) ? data.tipo : [data.tipo];
        this.ataques = data.ataques;
        this.status = data.status;
        this.natureza = data.natureza;
        this.habilidade = data.habilidade;
        this.heldItem = data.heldItem;
        this.usedItem = data.usedItem;
        this.sprites = data.sprites;
    }

    atacar(ataqueEscolhido: number, pokeEnemie: Pokemon) {
        const ataqueSelecionado: Ataques = this.ataques.filter((ataque) => ataque.posicao == ataqueEscolhido)[0];
        let dano: number;
        let atk: number;
        let def: number;

        //definição se será ataque/defesa física ou especial
        if (ataqueSelecionado.pp > 0) {
            ataqueSelecionado.pp -= 1;
            [atk, def] = ataqueSelecionado.categoria == 'physical' ? [this.status.attack, pokeEnemie.status.defense] : [this.status.spAttack, pokeEnemie.status.spDefense];
        }

        if (ataqueSelecionado.categoria == 'status') {
            let efeito: keyof StatusData = ataqueSelecionado.efeito.statusAfetado //.propriedade do efeito (estruturar objeto effect do ataque)
            let valorDoEfeito: number = ataqueSelecionado.efeito.valor

            this.status[efeito] += valorDoEfeito
        }
        //criar calculo de ataque baseado no level + atk + def

        //retornar dano ou status

        //adicionar metodo de recebimento de dano
        pokeEnemie.receberDano(dano)
    }

    receberDano(dano: number) {
        let vidaTotal = this.status.hp;
        this.status.hp -= dano

        if (vidaTotal < 0) {
            this.defeated = true;
            vidaTotal = 0;
            return "O pokémon desmaiou."
        }
    }
}

export class Natureza {
    nome: string;
    buffStatus: object;
    nerfStatus: object;

    constructor(data: NaturezaData) {
        this.nome = data.nome;
        this.buffStatus = data.buffStatus;
        this.nerfStatus = data.nerfStatus;
    }
}

export class Tipos {
    nome: string;
    symbol: string;
    superEfective: object;
    notVeryEffective: object;
    hasNoEffect: object;
    noAdvantage: object;

    constructor(data: TiposData) {
        this.nome = data.nome
        this.symbol = data.symbol
        this.superEfective = data.superEfective;
        this.notVeryEffective = data.notVeryEffective;
        this.hasNoEffect = data.hasNoEffect;
        this.noAdvantage = data.noAdvantage;
    }
}

export class Conditicoes {
    nome: string;
    effect: object;
    turnsLeft: number;

    constructor(data: CondicoesData) {
        this.nome = data.nome;
        this.effect = data.effect;
        this.turnsLeft = data.turnsLeft;
    }
}

export class Habilidade {
    nome: string;
    effect: object;

    constructor(data: HabilidadeData) {
        this.nome = data.nome;
        this.effect = data.effect;

    }
}