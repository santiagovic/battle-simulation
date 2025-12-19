import { Pokemon, Tipos, Natureza, Habilidade, Condicao } from "./pokemon";
import { Item } from "./item";
import { Ataques } from "./attack";
import { PokeMaisVelozDoTurno } from "../utils/battleUtils";

export class Batalha {
    pokemon: Pokemon;
    pokeInimigo: Pokemon;
    ataqueUsado: number;
    itemUsado: Item;
    turno: number = 1;

    constructor(pokemon: Pokemon, pokeInimigo: Pokemon, ataqueUsado: number, itemUsado: Item, turno: number) {
        this.pokemon = pokemon;
        this.pokeInimigo = pokeInimigo;
        this.ataqueUsado = ataqueUsado;
        this.itemUsado = itemUsado;
        this.turno = turno;
    }

    iniciarBatalha() {//texto inicial talvez
    }

    turnoAtual(atacante: Pokemon, defensor: Pokemon, ataqueUsado: number) {
        //1: verifica quem ataca primeiro pela velocidade
        const PrimeiroAtacante = PokeMaisVelozDoTurno(atacante, defensor);
        if (PrimeiroAtacante) {
            //2: atacante usa metodo atacar
            PrimeiroAtacante.atacar(ataqueUsado, defensor);
        }

        //problema: refatorar função que valida o poke mais veloz do turno ou criar uma nova função para verificar o poke mais lento do turno para receber o dano
        //3: defensor usa metodo receber dano




    }


}
