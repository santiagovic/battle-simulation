import { TiposData } from './pokemonData'

export interface AtaqueData {
    name: string;
    power: number;
    pp: number;
    tipo: TiposData;
    criticalChance: number;
    category: string;
    effect: object;
    position: number;
}

