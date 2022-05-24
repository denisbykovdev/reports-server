import { Model, Optional } from "sequelize/types";
import { IProblem } from "./IProblem";

export interface IArea {
    id?: number;
    area_name: string;
    problems?: IProblem[];
    samples?: IProblem[];
    isSavedToReport?: boolean;
    // problems?: string[];
    // samples?: string[];
}

export interface IAreaCreation extends Optional<IArea, 'id' | 'problems' | 'samples' | 'isSavedToReport'> {}


export interface IAreaInstance extends Model<IArea, IAreaCreation>, IArea {}
