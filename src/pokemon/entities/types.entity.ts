import { TypeData } from "../../shared/types/type.types";

export class Type {
    name: string;
    symbol: string;
    doublesDamageFrom?: string[];
    doublesDamageAgainst?: string[];
    halfDamageFrom?: string[];
    halfDamageAgainst?: string[];
    noDamageFrom?: string[];
    noDamageAgainst?: string[];

    constructor(data: TypeData) {
        this.name = data.name;
        this.symbol = data.symbol;
        this.doublesDamageFrom = data.doublesDamageFrom;
        this.doublesDamageAgainst = data.doublesDamageAgainst;
        this.halfDamageFrom = data.halfDamageFrom;
        this.halfDamageAgainst = data.halfDamageAgainst;
        this.noDamageFrom = data.noDamageFrom;
        this.noDamageAgainst = data.noDamageAgainst;
    }
}
