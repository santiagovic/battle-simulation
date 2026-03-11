import { StatusData } from "./pokemon.types";

export interface ItemData {
    name: string;
    effect: { affectedStatus: keyof StatusData, value: number };
    cost: number;
    holdable: boolean;
    consumable: boolean;
    sprite: string;
}
