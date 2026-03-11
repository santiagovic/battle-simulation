import { Pokemon, Tipos } from "../../src/pokemon/entities/pokemon.entity";
import { Ataques } from "./entities/ataque.entity";
import { PokemonData, StatusData } from "../shared/pokemon.types";


export function calcularResistencia(ataqueSelecionado: Ataques, tipoInimigo: Tipos[]): number {
    let tipodoAtaque = ataqueSelecionado.tipo;
    let multiplicador: number = 1

    for (let tipoDefensor of tipoInimigo) {
        let nomeTipoDef = tipoDefensor.nome

        if (tipodoAtaque.danoDobradoContra && tipodoAtaque.danoDobradoContra.includes(nomeTipoDef)) {
            multiplicador *= 2
        }

        if (tipodoAtaque.metadeDanoContra && tipodoAtaque.metadeDanoContra.includes(nomeTipoDef)) {
            multiplicador *= 0.5
        }

        if (tipodoAtaque.SemDanoContra && tipodoAtaque.SemDanoContra.includes(nomeTipoDef)) {
            multiplicador *= 0
        }
    }
    return multiplicador;
}


export function calcularCritico(chanceDoAtaque: number): number {
    let numAleatorio: number = Math.random() * 100;
    return numAleatorio < chanceDoAtaque ? 1.5 : 1
}


export function subtrairPPdoAtacante(ataqueSelecionado: Ataques): Number {
    return ataqueSelecionado.pp -= 1
}


export function definirTiposdeAtkeDef(pokeAtacante: Pokemon, pokeDefensor: Pokemon, ataqueSelecionado: Ataques): [number, number] {

    return ataqueSelecionado.categoria == 'physical' ? [pokeAtacante.status.attack, pokeDefensor.status.defense] : [pokeAtacante.status.spAttack, pokeDefensor.status.spDefense]

}

export function aplicarStatusDoAtaque(pokeAtacante: Pokemon, pokeDefensor: Pokemon, ataqueSelecionado: Ataques): string {
    let efeito: { statusAfetado: keyof StatusData, valor: number, alvo: string } = ataqueSelecionado.efeito;
    let valorDoEfeito: number = efeito.valor;
    let alvoDoEfeito: string = efeito.alvo;

    if (alvoDoEfeito === 'user') {
        pokeAtacante.status[efeito.statusAfetado] += valorDoEfeito
        return `Status de ${pokeAtacante.status[efeito.statusAfetado]} foi aumentado.`
    }
    else {
        pokeDefensor.status[efeito.statusAfetado] += valorDoEfeito
        return `Status de ${pokeDefensor.status[efeito.statusAfetado]} foi ${efeito.valor < 0 ? 'diminuido' : 'aumentado'}.`
    }
}

export function verificarIgualdadeDeTipoAtkePkm(pokeAtacante: Pokemon, ataqueSelecionado: Ataques): boolean {
    return pokeAtacante.tipo.some(tipo => tipo.nome == ataqueSelecionado.tipo.nome)
}

//((((2 * LEVEL / 5 + 2) * ATKSTAT * ATKPOWER / DEFSTAT) / 50) + 2) * STAB * WEAKNESS_RESISTANCE * CRITICAL * OTHER * (MARGIN / 100)

export function calcularDano(pokeAtacante: Pokemon, pokeDefensor: Pokemon, ataqueSelecionado: Ataques, atk: number, def: number, stab: number): number {
    return ((((2 * pokeAtacante.level / 5 + 2) * atk * ataqueSelecionado.poder / def) / 50) + 2) * stab * calcularCritico(ataqueSelecionado.critico) * calcularResistencia(ataqueSelecionado, pokeDefensor.tipo);
}