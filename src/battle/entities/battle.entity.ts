import { Pokemon } from "../../pokemon/entities/pokemon.entity";
import { Item } from "../../pokemon/entities/item.entity";

export class Battle {
    pokemon: Pokemon;
    enemyPokemon: Pokemon;
    attackUsed: number;
    itemUsed: Item;
    turn: number = 1;
    weather: string | null = null;
    pokemonSwapped: boolean = false;

    constructor(pokemon: Pokemon, enemyPokemon: Pokemon, attackUsed: number, itemUsed: Item, turn: number, weather: string | null, pokemonSwapped: boolean = false) {
        this.pokemon = pokemon;
        this.enemyPokemon = enemyPokemon;
        this.attackUsed = attackUsed;
        this.itemUsed = itemUsed;
        this.turn = turn;
        this.weather = weather;
        this.pokemonSwapped = pokemonSwapped;
    }

    
}
