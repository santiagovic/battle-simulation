import { NaturezaData, PokemonData, TiposData, StatusData, CondicaoData } from '../interfaces/pokemonData'
import { ItemData } from '../interfaces/itemData'
import { Ataques } from './ataque';
import { Item } from './item'

import { verificarIgualdadeDeTipoAtkePkm, subtrairPPdoAtacante, definirTiposdeAtkeDef, aplicarStatusDoAtaque, calcularDano } from '../utils/pokemonUtils'


export class Pokemon {
    nome: string;
    apelido: string;
    level: number;
    itemSegurado: ItemData | null;
    itemUsado: ItemData | null = null;
    tipo: Tipos[];
    ataques: Ataques[];
    status: StatusData;
    natureza: Natureza;
    sprites: object;
    desmaiado: boolean = false;
    condicao: Condicao | null = null;

    constructor(data: PokemonData) {
        this.nome = data.nome;
        this.apelido = data.apelido;
        this.level = data.level;
        this.tipo = (Array.isArray(data.tipo) ? data.tipo : [data.tipo]).map(t => new Tipos(t));
        this.ataques = (Array.isArray(data.ataques) ? data.ataques : [data.ataques]).map(a => new Ataques(a));
        this.status = data.status;
        this.natureza = new Natureza(data.natureza);
        this.itemSegurado = data.itemSegurado ? new Item(data.itemSegurado) : null;
        this.sprites = data.sprites;
        this.condicao = data.condicao ? new Condicao(data.condicao) : null;
    }

    atacar(posicaoDoAtaqueEscolhido: number, pokeDefensor: Pokemon) {
        const ataqueSelecionado: Ataques | undefined = this.ataques.find(ataque => ataque.posicao === posicaoDoAtaqueEscolhido);

        if (ataqueSelecionado) {
            let atk: number;
            let def: number;
            let categDoAtaque: string = ataqueSelecionado.categoria;

            if (ataqueSelecionado.pp > 0) {
                subtrairPPdoAtacante(ataqueSelecionado);

                if (categDoAtaque === 'physical') {

                    [atk, def] = definirTiposdeAtkeDef(this, pokeDefensor, ataqueSelecionado);

                    let tipoDoAtaqueIgualaoTipoPkm: boolean = verificarIgualdadeDeTipoAtkePkm(this, ataqueSelecionado);
                    const stab: number = tipoDoAtaqueIgualaoTipoPkm == true ? 1.5 : 1

                    const dano: number = calcularDano(this, pokeDefensor, ataqueSelecionado, atk, def, stab);
                    pokeDefensor.receberDano(dano) //calcular variavel do itemSegurado
                }

                else if (categDoAtaque === 'status') {
                    aplicarStatusDoAtaque(this, pokeDefensor, ataqueSelecionado);
                }
            }
        }
    }

    receberDano(dano: number) {
        this.status.hp -= dano

        if (this.status.hp <= 0) {
            this.desmaiado = true;
            this.status.hp = 0;
            return "O pokémon desmaiou."
            //criar e chamar metodo de encerrar batalha quando desmaiar
        }

    }

    usarItem() {
        if (this.itemUsado) {
            if (this.itemUsado.consumivel) {
                const statusASerModificado: keyof StatusData = this.itemUsado.efeito.statusAfetado;
                const valorDoEfeitodoItem: number = this.itemUsado.efeito.valor;

                this.status[statusASerModificado] += valorDoEfeitodoItem;

                const nomeDoItem = this.itemUsado.nome
                this.itemUsado = null;
                return `Você usou 1 ${nomeDoItem}.`
            }
        }
    }
}

export class Natureza {
    nome: string;
    buffStatus: keyof StatusData | null;
    nerfStatus: keyof StatusData | null;

    constructor(data: NaturezaData) {
        this.nome = data.nome;
        this.buffStatus = data.buffStatus;
        this.nerfStatus = data.nerfStatus;
    }
}

export class Tipos {
    nome: string;
    symbol: string;
    danoDobradoDe?: string[];
    danoDobradoContra?: string[];
    metadeDanoDe?: string[];
    metadeDanoContra?: string[];
    SemDanoDe?: string[];
    SemDanoContra?: string[];

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

export class Condicao {
    nome: string;
    efeito: { nome: keyof StatusData, valor: number };
    turnosRestantes: number;

    constructor(data: CondicaoData) {
        this.nome = data.nome;
        this.efeito = data.efeito;
        this.turnosRestantes = data.turnosRestantes;
    }
}

