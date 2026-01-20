import { Pokemon, Tipos } from "../classes/pokemon";
import { Ataques } from "../classes/ataque";
import { PokemonData, StatusData } from "../interfaces/pokemonData";
import { Batalha } from "../classes/batalha";


//verifica qual velocidade é maior para definir atacante
export function PokeMaisVelozDoTurno(pokeAtacante: Pokemon, pokeDefensor: Pokemon): Pokemon {
    const atacanteMaisRapido: boolean = pokeAtacante.status.speed >= pokeDefensor.status.speed;

    return atacanteMaisRapido ? pokeAtacante : pokeDefensor;
}

//usado na condição de confusão
export function turnosRestantesAleatorios(min: number = 1, max: number = 4) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//usado na condição de apaixonado
export function zeraTurnosSePokemonForTrocado(batalha: Batalha) : number | null{
    return batalha.pokeTrocado ? 0 : null
}