import { Pokemon, Tipos, Natureza, Condicao } from "./pokemon";
import { Item } from "./item";
import { Ataques } from "./ataque";
import { PokeMaisVelozDoTurno } from "../utils/batalhaUtils";

export class Batalha {
    pokemon: Pokemon;
    pokeInimigo: Pokemon;
    ataqueUsado: number;
    itemUsado: Item;
    turno: number = 1;
    clima: string | null = null;
    pokeTrocado: boolean = false;

    constructor(pokemon: Pokemon, pokeInimigo: Pokemon, ataqueUsado: number, itemUsado: Item, turno: number, clima: string | null, pokeTrocado: boolean = false) {
        this.pokemon = pokemon;
        this.pokeInimigo = pokeInimigo;
        this.ataqueUsado = ataqueUsado;
        this.itemUsado = itemUsado;
        this.turno = turno;
        this.clima = clima;
        this.pokeTrocado = pokeTrocado;
    }

    iniciarBatalha() {
        //texto inicial talvez

        //1 - verificar se naturezas ou habilidades afetam status na batalha

        //2 - abrir menu de opções

        //3 - chamar metodo turno atual pela primeira vez
    }

    turnoAtual(atacante: Pokemon, defensor: Pokemon, ataqueUsado: number) {

        //1: define quem ataca primeiro pela velocidade
        const PrimeiroAtacante: Pokemon = PokeMaisVelozDoTurno(atacante, defensor);

        //2: verifica se atacante possui condicao e aplicar baseado na probabilidade


        //3: atacar
        PrimeiroAtacante.atacar(ataqueUsado, defensor);

        //4: defensor usa metodo receber dano

        //5: defensor ataca

        //6: atacante recebe dano

        //7: fim do turno e retorna ao menu de ações (?)
    }

    sinalizarQuePokemonFoiTrocado() {
        this.pokeTrocado = true;
    }

    removerCondicoesVolateis() {
        if (this.pokemon.condicao && this.pokemon.condicao.volatil) {
            this.pokemon.condicao.turnosRestantes = null;
        }
    }
}
