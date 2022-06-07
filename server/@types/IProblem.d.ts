import { Model, Optional } from "sequelize/types";
import { IStandart } from "./IStandart";

export interface IProblem {
    id?: number;
    name: string;
    details_of_eclipse?: string;
    image?: string;
    solution?: string;
    cost?: string;
    standarts?: IStandart[];
    profession_name?: string;
    timeStamp?: string;
    isSavedToReport?: boolean;
    area_id?: number;
}

export interface IProblemCreation extends Optional<IProblem, 'id'|'details_of_eclipse'|'image'|'solution'|'cost'|'profession_name'|'isSavedToReport'> {}


export interface IProblemInstance extends Model<IProblem, IProblemCreation>, IProblem {}
