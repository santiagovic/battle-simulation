import { AttackData } from "../../shared/types/attack.types";
import { TypeData } from "../../shared/types/type.types";
import { StatusData } from "../../shared/types/pokemon.types";

export class Attack {
    name: string;
    power: number;
    pp: number;
    type: TypeData;
    critical: number;
    category: string;
    effect: { affectedStatus: keyof StatusData, value: number, target: string };
    position: number;
    accuracy: number;

    constructor(data: AttackData) {
        this.name = data.name;
        this.power = data.power;
        this.pp = data.pp;
        this.type = data.type;
        this.critical = data.critical;
        this.category = data.category;
        this.effect = { affectedStatus: data.effect.affectedStatus, value: data.effect.value, target: data.effect.target };
        this.position = data.position;
        this.accuracy = data.accuracy;
    }
}
