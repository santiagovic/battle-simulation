import { NatureData, StatusData } from "../../shared/types/pokemon.types";

export class Nature {
    name: string;
    buffStatus: keyof StatusData | null;
    nerfStatus: keyof StatusData | null;

    constructor(data: NatureData) {
        this.name = data.name;
        this.buffStatus = data.buffStatus;
        this.nerfStatus = data.nerfStatus;
    }
}
