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
    natureza: Natureza;
    habilidade: Habilidade;
    sprites: object;
    defeated: boolean = false;
    condicoes: Condicoes;

    constructor(data: PokemonData) {
        this.nome = data.nome;
        this.apelido = data.apelido;
        this.level = data.level;
        this.tipo = (Array.isArray(data.tipo) ? data.tipo : [data.tipo]).map(t => new Tipos(t));
        this.ataques = (Array.isArray(data.ataques) ? data.ataques : [data.ataques]).map(a => new Ataques(a));
        this.status = data.status;
        this.natureza = data.natureza;
        this.habilidade = data.habilidade;
        this.heldItem = data.heldItem;
        this.usedItem = data.usedItem;
        this.sprites = data.sprites;
        this.condicoes = data.condicoes;
    }

    atacar(ataqueEscolhido: number, pokeEnemie: Pokemon) {
        const ataqueSelecionado: Ataques = this.ataques.filter((ataque) => ataque.posicao == ataqueEscolhido)[0];
        let dano: number;
        let atk: number;
        let def: number;
        let tipodoAtaque: string = ataqueSelecionado.categoria;

        //verifica se o tipo do ataque é igual ao do pokemon pra add mais dano
        let verificarTipo: boolean = this.tipo.some(tipo => tipo.nome == ataqueSelecionado.tipo.nome)
        const stab = verificarTipo == true ? 1.5 : 1

        //definição se será ataque/defesa física ou especial
        if (ataqueSelecionado.pp > 0) {
            ataqueSelecionado.pp -= 1;

            //define o tipo de ataque e defesa a ser usado dos pokemons
            [atk, def] = tipodoAtaque == 'physical' ? [this.status.attack, pokeEnemie.status.defense] : [this.status.spAttack, pokeEnemie.status.spDefense];
        

        //valida e executa caso ataque seja da categoria status
        if (ataqueSelecionado.categoria === 'status') {
            let efeito: keyof StatusData = ataqueSelecionado.efeito.statusAfetado //.propriedade do efeito (estruturar objeto effect do ataque)
            let valorDoEfeito: number = ataqueSelecionado.efeito.valor

            this.status[efeito] += valorDoEfeito

            return `Status de ${this.status[efeito]} foi aumentado.`
        }

        //criar calculo de ataque baseado no level + atk + def

        //ataque de dano fisico (consulta via internet para estruturar formula): ((((2 * LEVEL / 5 + 2) * ATKSTAT * ATKPOWER / DEFSTAT) / 50) + 2) * STAB * WEAKNESS_RESISTANCE * CRITICAL * OTHER * (MARGIN / 100)
        if (tipodoAtaque === 'physical') {
            let calcularDano = ((((2 * this.level / 5 + 2) * atk / def) / 50) + 2) * stab * ataqueSelecionado.chanceCritico // * WEAKNESS_RESISTANCE * 

            //continuar: estruturar um json com todas as resistencias e fraquezas para calcular a fraqueza do ataque
        }


        //retornar dano ou status

        //adicionar metodo de recebimento de dano
        //pokeEnemie.receberDano(dano)
    }
    }

    receberDano(dano: number) {
        this.status.hp -= dano

        if (this.status.hp < 0) {
            this.defeated = true;
            this.status.hp = 0;
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
    danoDobradoDe: string[]; 
    danoDobradoContra: string[]; 
    metadeDanoDe: string[];
    metadeDanoContra: string[];
    SemDanoDe: string[];
    SemDanoContra: string[];

    constructor(data: TiposData) {
        this.nome = data.nome
        this.symbol = data.symbol
        this.danoDobradoDe = data.danoDobradoDe;
        this.danoDobradoContra = data.danoDobradoContra;
        this.metadeDanoDe = data.metadeDanoDe;
        this.metadeDanoContra = data.metadeDanoContra;
        this.SemDanoDe = data.SemDanoDe;
        this.SemDanoContra = data.SemDanoContra;
    }
}

export class Condicoes {
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