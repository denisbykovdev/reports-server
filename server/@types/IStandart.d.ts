import { Model, Optional } from "sequelize/types";

export interface IStandart {
    id?: number
    text: string
    image: string
    whatToDo: string
    fault: string
    profession: string
    problem_id?: number
}

export interface IStandartCreation extends Optional<IStandart, 'id'>{}


export interface IStandartInstance extends Model<IStandart, IStandartCreation>, IStandart {}