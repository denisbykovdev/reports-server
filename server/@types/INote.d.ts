import { Model, Optional } from "sequelize/types";

export interface INote {
    id?: number;
    text: string;
    report_id?: number;
}

export interface INoteCreation extends Optional<INote, 'id'>{}


export interface INoteInstance extends Model<INote, INoteCreation>, INote {}
