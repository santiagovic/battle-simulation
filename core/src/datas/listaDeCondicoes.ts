import { CondicaoData } from '../interfaces/pokemonData'

const arrayDeCondicoes = [
  {
    "nome": "queimadura",
    "efeito": {
      "nome": "hp",
      "valor": 0.9375
    },
    "turnosRestantes": null,
    "volatil": false
  },
  {
    "nome": "paralisia",
    "efeito": {
      "nome": "speed",
      "valor": 0.5
    },
    "turnosRestantes": null,
    "volatil": false
  },
  {
    "nome": "envenenamento",
    "efeito": {
      "nome": "hp",
      "valor": 0.875
    },
    "turnosRestantes": null,
    "volatil": false
  },
  {
    "nome": "envenenamento grave",
    "efeito": {
      "nome": "hp",
      "valor": 0.9375
    },
    "turnosRestantes": null,
    "volatil": false
  },
  {
    "nome": "sono",
    "efeito": {
      "nome": "speed",
      "valor": 0
    },
    "turnosRestantes": 3,
    "volatil": false
  },
  {
    "nome": "congelamento",
    "efeito": {
      "nome": "speed",
      "valor": 0
    },
    "turnosRestantes": null,
    "volatil": false
  },
  {
    "nome": "geladura",
    "efeito": {
      "nome": "hp",
      "valor": 0.9375
    },
    "turnosRestantes": null,
    "volatil": false
  },
  {
    "nome": "sonolência",
    "efeito": {
      "nome": "defense",
      "valor": 0.66
    },
    "turnosRestantes": 4,
    "volatil": false
  }
]

export const listaDeCondicoes: CondicaoData[] = arrayDeCondicoes as CondicaoData[]