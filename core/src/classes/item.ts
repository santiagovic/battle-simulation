import { ItemData } from "../interfaces/itemData";
import { StatusData } from "../interfaces/pokemonData";

export class Item {
    nome: string;
    efeito: { statusAfetado: keyof StatusData, valor: number };
    custo: number;
    seguravel: boolean;
    consumivel: boolean;

    constructor(data: ItemData){
        this.nome = data.nome;
        this.efeito = data.efeito;
        this.custo = data.custo;
        this.seguravel = data.seguravel;
        this.consumivel = data.consumivel;
    }
}
