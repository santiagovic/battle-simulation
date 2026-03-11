import { AtaqueData } from './ataque.types'
import { ItemData } from './item.types';

export interface PokemonData {
    nome: string;
    apelido: string;
    level: number;
    itemSegurado?: ItemData;
    itemUsado?: ItemData;
    tipo: TiposData;
    ataques: AtaqueData[];
    status: StatusData;
    natureza: NaturezaData;
    sprites: object;
    desmaiado: boolean;
    condicao?: CondicaoData;
}

export interface NaturezaData {
    nome: string;
    buffStatus: keyof StatusData | null;
    nerfStatus: keyof StatusData | null;
}

export interface TiposData {
    nome: string;
    symbol: string; //adicionar url dps
    danoDobradoDe?: string[];
    danoDobradoContra?: string[];
    metadeDanoDe?: string[];
    metadeDanoContra?: string[];
    SemDanoDe?: string[];
    SemDanoContra?: string[];
}

export interface StatusData {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
}

export interface CondicaoData {
    nome: string;
    efeitos: { nome: keyof StatusData | keyof AtaqueData, valor: number, probabilidade: number, tipoImune: TiposData["nome"] | null }[] | { metodo: string | null, probabilidade: number};
    turnosRestantes: number | null;
    volatil: boolean
}
