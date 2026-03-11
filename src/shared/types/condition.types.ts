import { StatusData } from "./pokemon.types";
import { AttackData } from "./attack.types";
import { TypeData } from "./type.types";

export interface ConditionData {
    name: string;
    effects: { name: keyof StatusData | keyof AttackData, value: number, probability: number, immuneType: TypeData["name"] | null }[] | { method: string | null, probability: number };
    remainingTurns: number | null;
    volatile: boolean
}
