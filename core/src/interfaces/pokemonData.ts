import { AtaqueData } from './attackData'
import { ItemData } from './itemData';

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
    habilidade: HabilidadeData;
    sprites: object;
    desmaiado: boolean;
    condicao?: CondicaoData;
}

export interface NaturezaData {
    nome: string;
    buffStatus: {nome: keyof StatusData, valor: number};
    nerfStatus: {nome: keyof StatusData, valor: number};
}

export interface TiposData {
    nome: string;
    symbol: string; //adicionar url dps
    danoDobradoDe: string[]; 
    danoDobradoContra: string[]; 
    metadeDanoDe: string[];
    metadeDanoContra: string[];
    SemDanoDe: string[];
    SemDanoContra: string[];
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
    efeito: {nome: keyof StatusData, valor: number};
    turnosRestantes: number;
}

export interface HabilidadeData {
    nome: string;
    efeito: {nome: keyof StatusData, valor: number};
}

export interface ResistenciaData {
    
}