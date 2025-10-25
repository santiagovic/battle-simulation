import { AtaqueData } from './attackData'
import { ItemData } from './itemData';

export interface PokemonData {
    nome: string;
    apelido: string;
    level: number;
    heldItem: ItemData;
    usedItem: ItemData;
    tipo: TiposData;
    ataques: AtaqueData[];
    status: StatusData;
    natureza: NaturezaData;
    habilidade: HabilidadeData;
    sprites: object;
    defeated: boolean;
    condicao?: CondicaoData;
}

export interface NaturezaData {
    nome: string;
    buffStatus: object;
    nerfStatus: object;
    favfood: object;
    hatedfood: object;
}

export interface TiposData {
    nome: string;
    symbol: string; //adicionar url
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
    effect: object;
    turnsLeft: number;
}

export interface HabilidadeData {
    nome: string;
    effect: object;
}

export interface ResistenciaData {
    
}