import { CondicaoData } from '../interfaces/pokemonData'
import { turnosRestantesAleatorios, zeraTurnosSePokemonForTrocado } from '../utils/batalhaUtils'
import { Batalha } from '../classes/batalha'

const arrayDeCondicoes: CondicaoData[] = [
  {
    "nome": "queimadura",
    "efeitos": [{
      "nome": "hp",
      "valor": 0.9375,
      "probabilidade": 1,
      "tipoImune": "fire"
    },
    {
      "nome": "attack",
      "valor": 0.5,
      "probabilidade": 1,
      "tipoImune": null
    }],
    "turnosRestantes": null,
    "volatil": false,
  },
  {
    "nome": "paralisia",
    "efeitos": [{
      "nome": "speed",
      "valor": 0.5,
      "probabilidade": 1,
      "tipoImune": null
    },
    {
      "nome": "speed",
      "valor": 0,
      "probabilidade": 0.25,
      "tipoImune": null
    }],
    "turnosRestantes": null,
    "volatil": false,
  },
  {
    "nome": "envenenamento",
    "efeitos": [{
      "nome": "hp",
      "valor": 0.875,
      "probabilidade": 1,
      "tipoImune": null
    }],
    "turnosRestantes": null,
    "volatil": false,
  },
  {
    "nome": "sono",
    "efeitos": [{
      "nome": "speed",
      "valor": 0,
      "probabilidade": 1,
      "tipoImune": null
    }],
    "turnosRestantes": 3,
    "volatil": false,
  },
  {
    "nome": "congelamento",
    "efeitos": [{
      "nome": "speed",
      "valor": 0,
      "probabilidade": 0.8,
      "tipoImune": null
    }],
    "turnosRestantes": null,
    "volatil": false,
  },
  {
    "nome": "geladura",
    "efeitos": [{
      "nome": "hp",
      "valor": 0.9375,
      "probabilidade": 1,
      "tipoImune": null
    }],
    "turnosRestantes": null,
    "volatil": false,
  },
  {
    "nome": "sonolência",
    "efeitos": [{
      "nome": "defense",
      "valor": 0.66,
      "probabilidade": 1,
      "tipoImune": null,
    }],
    "turnosRestantes": 4,
    "volatil": false,

  },
  {
    "nome": "confusão",
    "efeitos": {
      "metodo": "atacar",
      "probabilidade": 0.5,
    },
    "turnosRestantes": turnosRestantesAleatorios(),
    "volatil": true,
  },
  {
    "nome": "amedrontado",
    "efeitos": [{
      "nome": "speed",
      "valor": 0,
      "probabilidade": 1,
      "tipoImune": null
    }],
    "turnosRestantes": 1,
    "volatil": true,
},
{
  "nome": "apaixonado",
  "efeitos": [{
    "nome":"precisao",
    "valor": 0.5,
    "probabilidade": 1,
    "tipoImune": null
  }],
  "turnosRestantes": null,
  "volatil": true
}

]

export const listaDeCondicoes: CondicaoData[] = arrayDeCondicoes as CondicaoData[]