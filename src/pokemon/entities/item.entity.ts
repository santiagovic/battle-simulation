import { ItemData } from "../../shared/types/item.types";
import { StatusData } from "../../shared/types/pokemon.types";

export class Item {
    name: string;
    effect: { affectedStatus: keyof StatusData, value: number };
    cost: number;
    holdable: boolean;
    consumable: boolean;
    sprite: string;

    constructor(data: ItemData) {
        this.name = data.name;
        this.effect = data.effect;
        this.cost = data.cost;
        this.holdable = data.holdable;
        this.consumable = data.consumable;
        this.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${this.name}.png`;
    }
}
