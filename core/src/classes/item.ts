import { ItemData } from "../interfaces/itemData";
import { StatusData, TiposData } from "../interfaces/pokemonData";

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
