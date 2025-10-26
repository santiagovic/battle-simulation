import { Tipos } from "../classes/pokemon";
import { Ataques } from "../classes/attack";

//calcula a fraqueza/resistencia
export function calcularResistencia(ataqueSelecionado: Ataques, tipoInimigo: Tipos[]): number {
    let tipodoAtaque = ataqueSelecionado.tipo;
    let multiplicador: number = 1

    for (let tipoDefensor of tipoInimigo) {
        let nomeTipoDef = tipoDefensor.nome

        if (tipodoAtaque.danoDobradoContra.includes(nomeTipoDef)) {
            multiplicador *= 2
        }

        if (tipodoAtaque.metadeDanoContra.includes(nomeTipoDef)) {
            multiplicador *= 0.5
        }

        if (tipodoAtaque.SemDanoContra.includes(nomeTipoDef)) {
            multiplicador *= 0
        }
    }
    return multiplicador;
}

//verifica se será golpe critico
export function calcularCritico(chanceDoAtaque: number): number {
    let numAleatorio: number = Math.random() * 100;
    return chanceDoAtaque >= numAleatorio ? 1.5 : 1.0
}