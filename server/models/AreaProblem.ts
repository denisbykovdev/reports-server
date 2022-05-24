import sequelize from "sequelize";
import { IAreaProblemInstance } from "../@types/IAreaProblem";
import { sequelizeConnection } from "../services/db";
// import { Area } from "./Area";
// import { Problem } from "./Problem";

export const AreaProblem = sequelizeConnection.define<IAreaProblemInstance>(
    'area_problem',
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        area_id: {
            type: sequelize.INTEGER,
            references: {
                model: 'areas',
                key: 'id'
            }
        },
        problem_id: {
            type: sequelize.INTEGER,
            references: {
                model: 'problems',
                key: 'id'
            }
        },
    }
);
