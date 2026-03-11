import { TypeData } from "../../shared/types/type.types";

const typesArray = [
    {
        "name": "normal",
        "doublesDamageFrom": [
            "fighting"
        ],
        "doublesDamageAgainst": [],
        "halfDamageFrom": [],
        "halfDamageAgainst": [
            "rock",
            "steel"
        ],
        "noDamageFrom": [
            "ghost"
        ],
        "noDamageAgainst": [
            "ghost"
        ]
    },
    {
        "name": "fighting",
        "doublesDamageFrom": [
            "flying",
            "psychic",
            "fairy"
        ],
        "doublesDamageAgainst": [
            "normal",
            "rock",
            "steel",
            "ice",
            "dark"
        ],
        "halfDamageFrom": [
            "rock",
            "bug",
            "dark"
        ],
        "halfDamageAgainst": [
            "flying",
            "poison",
            "bug",
            "psychic",
            "fairy"
        ],
        "noDamageFrom": [],
        "noDamageAgainst": [
            "ghost"
        ]
    },
    {
        "name": "flying",
        "doublesDamageFrom": [
            "rock",
            "electric",
            "ice"
        ],
        "doublesDamageAgainst": [
            "fighting",
            "bug",
            "grass"
        ],
        "halfDamageFrom": [
            "fighting",
            "bug",
            "grass"
        ],
        "halfDamageAgainst": [
            "rock",
            "steel",
            "electric"
        ],
        "noDamageFrom": [
            "ground"
        ],
        "noDamageAgainst": []
    },
    {
        "name": "poison",
        "doublesDamageFrom": [
            "ground",
            "psychic"
        ],
        "doublesDamageAgainst": [
            "grass",
            "fairy"
        ],
        "halfDamageFrom": [
            "fighting",
            "poison",
            "bug",
            "grass",
            "fairy"
        ],
        "halfDamageAgainst": [
            "poison",
            "ground",
            "rock",
            "ghost"
        ],
        "noDamageFrom": [],
        "noDamageAgainst": [
            "steel"
        ]
    },
    {
        "name": "ground",
        "doublesDamageFrom": [
            "water",
            "grass",
            "ice"
        ],
        "doublesDamageAgainst": [
            "poison",
            "rock",
            "steel",
            "fire",
            "electric"
        ],
        "halfDamageFrom": [
            "poison",
            "rock"
        ],
        "halfDamageAgainst": [
            "bug",
            "grass"
        ],
        "noDamageFrom": [
            "electric"
        ],
        "noDamageAgainst": [
            "flying"
        ]
    },
    {
        "name": "rock",
        "doublesDamageFrom": [
            "fighting",
            "ground",
            "steel",
            "water",
            "grass"
        ],
        "doublesDamageAgainst": [
            "flying",
            "bug",
            "fire",
            "ice"
        ],
        "halfDamageFrom": [
            "normal",
            "flying",
            "poison",
            "fire"
        ],
        "halfDamageAgainst": [
            "fighting",
            "ground",
            "steel"
        ],
        "noDamageFrom": [],
        "noDamageAgainst": []
    },
    {
        "name": "bug",
        "doublesDamageFrom": [
            "flying",
            "rock",
            "fire"
        ],
        "doublesDamageAgainst": [
            "grass",
            "psychic",
            "dark"
        ],
        "halfDamageFrom": [
            "fighting",
            "ground",
            "grass"
        ],
        "halfDamageAgainst": [
            "fighting",
            "flying",
            "poison",
            "ghost",
            "steel",
            "fire",
            "fairy"
        ],
        "noDamageFrom": [],
        "noDamageAgainst": []
    },
    {
        "name": "ghost",
        "doublesDamageFrom": [
            "ghost",
            "dark"
        ],
        "doublesDamageAgainst": [
            "ghost",
            "psychic"
        ],
        "halfDamageFrom": [
            "poison",
            "bug"
        ],
        "halfDamageAgainst": [
            "dark"
        ],
        "noDamageFrom": [
            "normal",
            "fighting"
        ],
        "noDamageAgainst": [
            "normal"
        ]
    },
    {
        "name": "steel",
        "doublesDamageFrom": [
            "fighting",
            "ground",
            "fire"
        ],
        "doublesDamageAgainst": [
            "rock",
            "ice",
            "fairy"
        ],
        "halfDamageFrom": [
            "normal",
            "flying",
            "rock",
            "bug",
            "steel",
            "grass",
            "psychic",
            "ice",
            "dragon",
            "fairy"
        ],
        "halfDamageAgainst": [
            "steel",
            "fire",
            "water",
            "electric"
        ],
        "noDamageFrom": [
            "poison"
        ],
        "noDamageAgainst": []
    },
    {
        "name": "fire",
        "doublesDamageFrom": [
            "ground",
            "rock",
            "water"
        ],
        "doublesDamageAgainst": [
            "bug",
            "steel",
            "grass",
            "ice"
        ],
        "halfDamageFrom": [
            "bug",
            "steel",
            "fire",
            "grass",
            "ice",
            "fairy"
        ],
        "halfDamageAgainst": [
            "rock",
            "fire",
            "water",
            "dragon"
        ],
        "noDamageFrom": [],
        "noDamageAgainst": []
    },
    {
        "name": "normal",
        "doublesDamageFrom": [
            "fighting"
        ],
        "doublesDamageAgainst": [],
        "halfDamageFrom": [],
        "halfDamageAgainst": [
            "rock",
            "steel"
        ],
        "noDamageFrom": [
            "ghost"
        ],
        "noDamageAgainst": [
            "ghost"
        ]
    },
    {
        "name": "grass",
        "doublesDamageFrom": [
            "flying",
            "poison",
            "bug",
            "fire",
            "ice"
        ],
        "doublesDamageAgainst": [
            "ground",
            "rock",
            "water"
        ],
        "halfDamageFrom": [
            "ground",
            "water",
            "grass",
            "electric"
        ],
        "halfDamageAgainst": [
            "flying",
            "poison",
            "bug",
            "steel",
            "fire",
            "grass",
            "dragon"
        ],
        "noDamageFrom": [],
        "noDamageAgainst": []
    },
    {
        "name": "electric",
        "doublesDamageFrom": [
            "ground"
        ],
        "doublesDamageAgainst": [
            "flying",
            "water"
        ],
        "halfDamageFrom": [
            "flying",
            "steel",
            "electric"
        ],
        "halfDamageAgainst": [
            "grass",
            "electric",
            "dragon"
        ],
        "noDamageFrom": [],
        "noDamageAgainst": [
            "ground"
        ]
    },
    {
        "name": "psychic",
        "doublesDamageFrom": [
            "bug",
            "ghost",
            "dark"
        ],
        "doublesDamageAgainst": [
            "fighting",
            "poison"
        ],
        "halfDamageFrom": [
            "fighting",
            "psychic"
        ],
        "halfDamageAgainst": [
            "steel",
            "psychic"
        ],
        "noDamageFrom": [],
        "noDamageAgainst": [
            "dark"
        ]
    },
    {
        "name": "ice",
        "doublesDamageFrom": [
            "fighting",
            "rock",
            "steel",
            "fire"
        ],
        "doublesDamageAgainst": [
            "flying",
            "ground",
            "grass",
            "dragon"
        ],
        "halfDamageFrom": [
            "ice"
        ],
        "halfDamageAgainst": [
            "steel",
            "fire",
            "water",
            "ice"
        ],
        "noDamageFrom": [],
        "noDamageAgainst": []
    },
    {
        "name": "dragon",
        "doublesDamageFrom": [
            "ice",
            "dragon",
            "fairy"
        ],
        "doublesDamageAgainst": [
            "dragon"
        ],
        "halfDamageFrom": [
            "fire",
            "water",
            "grass",
            "electric"
        ],
        "halfDamageAgainst": [
            "steel"
        ],
        "noDamageFrom": [],
        "noDamageAgainst": [
            "fairy"
        ]
    },
    {
        "name": "dark",
        "doublesDamageFrom": [
            "fighting",
            "bug",
            "fairy"
        ],
        "doublesDamageAgainst": [
            "ghost",
            "psychic"
        ],
        "halfDamageFrom": [
            "ghost",
            "dark"
        ],
        "halfDamageAgainst": [
            "fighting",
            "dark",
            "fairy"
        ],
        "noDamageFrom": [
            "psychic"
        ],
        "noDamageAgainst": []
    },
    {
        "name": "fairy",
        "doublesDamageFrom": [
            "poison",
            "steel"
        ],
        "doublesDamageAgainst": [
            "fighting",
            "dragon",
            "dark"
        ],
        "halfDamageFrom": [
            "fighting",
            "bug",
            "dark"
        ],
        "halfDamageAgainst": [
            "poison",
            "steel",
            "fire"
        ],
        "noDamageFrom": [
            "dragon"
        ],
        "noDamageAgainst": []
    }
]

export const allTypes: TypeData[] = typesArray as TypeData[];

