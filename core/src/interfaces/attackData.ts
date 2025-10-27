import { TiposData, StatusData } from './pokemonData'

export interface AtaqueData {
    nome: string;
    poder: number;
    pp: number;
    tipo: TiposData;
    critico: number;
    categoria: string;
    efeito: {statusAfetado: keyof StatusData, valor: number};
    posicao: number;
}

