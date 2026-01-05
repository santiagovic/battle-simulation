import { AtaqueData } from "../interfaces/ataqueData";
import { StatusData, TiposData } from "../interfaces/pokemonData";

export class Ataques {
    nome: string;
    poder: number;
    pp: number;
    tipo: TiposData;
    critico: number;
    categoria: string;
    efeito: { statusAfetado: keyof StatusData, valor: number, alvo: string };
    posicao: number;
    precisao: number;

    constructor(data: AtaqueData) {
        this.nome = data.nome;
        this.poder = data.poder;
        this.pp = data.pp;
        this.tipo = data.tipo;
        this.critico = data.critico;
        this.categoria = data.categoria;
        this.efeito = { statusAfetado: data.efeito.statusAfetado, valor: data.efeito.valor, alvo: data.efeito.alvo };
        this.posicao = data.posicao;
        this.precisao = data.precisao;
    }
}
