import { TiposData, StatusData } from './pokemonData'

export interface AtaqueData {
    nome: string;
    poder: number;
    pp: number;
    tipo: TiposData;
    chanceCritico: number;
    categoria: string;
    efeito: {statusAfetado: keyof StatusData, valor: number};
    posicao: number;
}

