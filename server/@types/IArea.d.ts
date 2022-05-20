import { IProblem } from "./IProblem";

export interface IArea {
    id?: number;
    area_name: string;
    // problems?: string[];
    // samples?: string[];
    problems?: IProblem[];
    samples?: IProblem[];
}
