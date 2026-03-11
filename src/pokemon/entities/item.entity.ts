import { ItemData } from "../../shared/item.types";
import { StatusData, TiposData } from "../../shared/pokemon.types";

export class Item {
    nome: string;
    efeito: { statusAfetado: keyof StatusData, valor: number };
    custo: number;
    seguravel: boolean;
    consumivel: boolean;
    sprite: string;

    constructor(data: ItemData) {
        this.nome = data.nome;
        this.efeito = data.efeito;
        this.custo = data.custo;
        this.seguravel = data.seguravel;
        this.consumivel = data.consumivel;
        this.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${this.nome}.png`;
    }
}
