import { StatusData } from "./pokemonData";

export interface ItemData {
    nome: string;
    efeito: {statusAfetado: keyof StatusData, valor: number};
    custo: number;
    seguravel: boolean;
    consumivel: boolean;
    sprite: string;
}
