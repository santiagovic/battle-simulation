import { StatusData } from "../../shared/types/pokemon.types";
import { ConditionData } from "../../shared/types/condition.types";
import { AttackData } from "../../shared/types/attack.types";
import { TypeData } from "../../shared/types/type.types";

export class Condition {
    name: string;
    effects: { name: keyof StatusData | keyof AttackData, value: number, probability: number, immuneType: TypeData["name"] | null }[] | { method: string | null, probability: number };
    remainingTurns: number | null;
    volatile: boolean

    constructor(data: ConditionData) {
        this.name = data.name;
        this.effects = data.effects;
        this.remainingTurns = data.remainingTurns;
        this.volatile = data.volatile;
    }
}
