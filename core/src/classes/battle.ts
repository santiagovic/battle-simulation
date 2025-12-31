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

    iniciarBatalha() {
        //texto inicial talvez

        //1 - verificar se naturezas ou habilidades afetam status na batalha

        //2 - abrir menu de opções

        //3 - chamar metodo turno atual pela primeira vez
    }

    turnoAtual(atacante: Pokemon, defensor: Pokemon, ataqueUsado: number) {
        //1: verifica quem ataca primeiro pela velocidade
        const PrimeiroAtacante = PokeMaisVelozDoTurno(atacante, defensor);

        //2: verifica se atacante possui condicao e aplicar baseado na probabilidade

        //3: atacar
        PrimeiroAtacante.atacar(ataqueUsado, defensor);

        //4: defensor usa metodo receber dano

        //5: defensor ataca

        //6: atacante recebe dano
    
        //7: fim do turno e retorna ao menu de ações (?)
    }


}
