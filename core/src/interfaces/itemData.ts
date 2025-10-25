import { StatusData } from "./pokemonData";

export interface ItemData {
    name: string;
    effect: {statusAfetado: keyof StatusData, valor: number};
    cost: number;
    holdable: boolean;
    consumable: boolean;
}
