import { Model, Optional } from "sequelize/types";

export interface IAreaProblem {
    id?: number;
    area_id: number;
    problem_id: number;
}

export interface IAreaProblemCreation extends Optional<IAreaProblem, 'area_id' | 'problem_id'> {}


export interface IAreaProblemInstance extends Model<IAreaProblem, IAreaProblemCreation>, IAreaProblem {}