import { Pokemon, Tipos } from "../classes/pokemon";
import { Ataques } from "../classes/attack";
import { PokemonData, StatusData } from "../interfaces/pokemonData";

//calcula a fraqueza/resistencia
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

//verifica se será golpe critico
export function calcularCritico(chanceDoAtaque: number): number {
    let numAleatorio: number = Math.random() * 100;
    return numAleatorio < chanceDoAtaque ? 1.5 : 1
}


//verifica qual velocidade é maior para definir atacante
export function PokeMaisVelozDoTurno(pokemon: Pokemon, pokeInimigo: Pokemon): Pokemon | null {
    const veloPoke: number = pokemon.status.speed;
    const veloPokeInimigo: number = pokeInimigo.status.speed;
    let maisVeloz: Pokemon | null = null;

    if (veloPoke > veloPokeInimigo) { maisVeloz = pokemon }
    if (veloPoke < veloPokeInimigo) { maisVeloz = pokeInimigo }
    if (veloPoke == veloPokeInimigo) { maisVeloz = null }

    return maisVeloz
}
