import { NaturezaData } from '../interfaces/pokemonData'

const arrayDeNaturezas = [
    {
        "nome": "resistente",
        "buffStatus": null,
        "nerfStatus": null
    },
    {
        "nome": "solitário",
        "buffStatus": "attack",
        "nerfStatus": "defense"
    },
    {
        "nome": "valente",
        "buffStatus": "attack",
        "nerfStatus": "speed"
    },
    {
        "nome": "inflexível",
        "buffStatus": "attack",
        "nerfStatus": "spAttack"
    },
    {
        "nome": "desobediente",
        "buffStatus": "attack",
        "nerfStatus": "spDefense"
    },
    {
        "nome": "dócil",
        "buffStatus": null,
        "nerfStatus": null
    },
    {
        "nome": "corajoso",
        "buffStatus": "defense",
        "nerfStatus": "attack"
    },
    {
        "nome": "relaxado",
        "buffStatus": "defense",
        "nerfStatus": "speed"
    },
    {
        "nome": "travesso",
        "buffStatus": "defense",
        "nerfStatus": "spAttack"
    },
    {
        "nome": "descuidado",
        "buffStatus": "defense",
        "nerfStatus": "spDefense"
    },
    {
        "nome": "sério",
        "buffStatus": null,
        "nerfStatus": null
    },
    {
        "nome": "tímido",
        "buffStatus": "speed",
        "nerfStatus": "attack"
    },
    {
        "nome": "apressado",
        "buffStatus": "speed",
        "nerfStatus": "defense"
    },
    {
        "nome": "alegre",
        "buffStatus": "speed",
        "nerfStatus": "spAttack"
    },
    {
        "nome": "ingênuo",
        "buffStatus": "speed",
        "nerfStatus": "spDefense"
    },
    {
        "nome": "reservado",
        "buffStatus": null,
        "nerfStatus": null
    },
    {
        "nome": "modesto",
        "buffStatus": "spAttack",
        "nerfStatus": "attack"
    },
    {
        "nome": "suave",
        "buffStatus": "spAttack",
        "nerfStatus": "defense"
    },
    {
        "nome": "quieto",
        "buffStatus": "spAttack",
        "nerfStatus": "speed"
    },
    {
        "nome": "precipitado",
        "buffStatus": "spAttack",
        "nerfStatus": "spDefense"
    },
    {
        "nome": "peculiar",
        "buffStatus": null,
        "nerfStatus": null
    },
    {
        "nome": "calmo",
        "buffStatus": "spDefense",
        "nerfStatus": "attack"
    },
    {
        "nome": "gentil",
        "buffStatus": "spDefense",
        "nerfStatus": "defense"
    },
    {
        "nome": "atrevido",
        "buffStatus": "spDefense",
        "nerfStatus": "speed"
    },
    {
        "nome": "cuidadoso",
        "buffStatus": "spDefense",
        "nerfStatus": "spAttack"
    }
]

export const ListaDeNaturezas: NaturezaData[] = arrayDeNaturezas as NaturezaData[]