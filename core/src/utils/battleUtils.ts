import { Pokemon, Tipos } from "../classes/pokemon";
import { Ataques } from "../classes/attack";
import { PokemonData, StatusData } from "../interfaces/pokemonData";


//verifica qual velocidade é maior para definir atacante
export function PokeMaisVelozDoTurno(pokeAtacante: Pokemon, pokeDefensor: Pokemon): Pokemon {
    const atacanteMaisRapido: boolean = pokeAtacante.status.speed >= pokeDefensor.status.speed;

    return atacanteMaisRapido ? pokeAtacante : pokeDefensor;
}


