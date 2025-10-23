import { Type } from './pokemon.ts'

export class Attack {
    name: string;
    power: number;
    pp: number;
    type: Type;

    constructor(name: string, power: number, pp: number, type: Type) {
        this.name = name;
        this.power = power;
        this.pp = pp;
        this.type = type;
    }

}

