import { TypeData } from './type.types';
import { StatusData } from './pokemon.types';

export interface AttackData {
    name: string;
    power: number;
    pp: number;
    type: TypeData;
    critical: number;
    category: string;
    effect: { affectedStatus: keyof StatusData, value: number, target: string };
    position: number;
    accuracy: number;
}
