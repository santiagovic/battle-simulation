import { NatureData } from '../../shared/types/pokemon.types'

const naturesArray = [
    {
        "name": "resistente",
        "buffStatus": null,
        "nerfStatus": null
    },
    {
        "name": "solitário",
        "buffStatus": "attack",
        "nerfStatus": "defense"
    },
    {
        "name": "valente",
        "buffStatus": "attack",
        "nerfStatus": "speed"
    },
    {
        "name": "inflexível",
        "buffStatus": "attack",
        "nerfStatus": "spAttack"
    },
    {
        "name": "desobediente",
        "buffStatus": "attack",
        "nerfStatus": "spDefense"
    },
    {
        "name": "dócil",
        "buffStatus": null,
        "nerfStatus": null
    },
    {
        "name": "corajoso",
        "buffStatus": "defense",
        "nerfStatus": "attack"
    },
    {
        "name": "relaxado",
        "buffStatus": "defense",
        "nerfStatus": "speed"
    },
    {
        "name": "travesso",
        "buffStatus": "defense",
        "nerfStatus": "spAttack"
    },
    {
        "name": "descuidado",
        "buffStatus": "defense",
        "nerfStatus": "spDefense"
    },
    {
        "name": "sério",
        "buffStatus": null,
        "nerfStatus": null
    },
    {
        "name": "tímido",
        "buffStatus": "speed",
        "nerfStatus": "attack"
    },
    {
        "name": "apressado",
        "buffStatus": "speed",
        "nerfStatus": "defense"
    },
    {
        "name": "alegre",
        "buffStatus": "speed",
        "nerfStatus": "spAttack"
    },
    {
        "name": "ingênuo",
        "buffStatus": "speed",
        "nerfStatus": "spDefense"
    },
    {
        "name": "reservado",
        "buffStatus": null,
        "nerfStatus": null
    },
    {
        "name": "modesto",
        "buffStatus": "spAttack",
        "nerfStatus": "attack"
    },
    {
        "name": "suave",
        "buffStatus": "spAttack",
        "nerfStatus": "defense"
    },
    {
        "name": "quieto",
        "buffStatus": "spAttack",
        "nerfStatus": "speed"
    },
    {
        "name": "precipitado",
        "buffStatus": "spAttack",
        "nerfStatus": "spDefense"
    },
    {
        "name": "peculiar",
        "buffStatus": null,
        "nerfStatus": null
    },
    {
        "name": "calmo",
        "buffStatus": "spDefense",
        "nerfStatus": "attack"
    },
    {
        "name": "gentil",
        "buffStatus": "spDefense",
        "nerfStatus": "defense"
    },
    {
        "name": "atrevido",
        "buffStatus": "spDefense",
        "nerfStatus": "speed"
    },
    {
        "name": "cuidadoso",
        "buffStatus": "spDefense",
        "nerfStatus": "spAttack"
    }
]

export const natureList: NatureData[] = naturesArray as NatureData[]
