import { AtaqueData } from "../interfaces/attackData";
import { StatusData, TiposData } from "../interfaces/pokemonData";

export class Ataques {
    nome: string;
    poder: number;
    pp: number;
    tipo: TiposData;
    critico: number;
    categoria: string;
    efeito: {statusAfetado: keyof StatusData, valor: number};
    posicao: number;

    constructor(data: AtaqueData) {
        this.nome = data.nome;
        this.poder = data.poder;
        this.pp = data.pp;
        this.tipo = data.tipo;
        this.critico = data.critico;
        this.categoria = data.categoria;
        this.efeito = { statusAfetado: data.efeito.statusAfetado, valor: data.efeito.valor };
        this.posicao = data.posicao
    }
}
