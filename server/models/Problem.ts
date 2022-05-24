import sequelize from "sequelize";
import { sequelizeConnection } from "../services/db";
import { IProblemInstance } from "../@types/IProblem";
import { Standart } from "./Standart";

export const Problem = sequelizeConnection.define<IProblemInstance>(
    'problems',
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: sequelize.STRING,
        details_of_eclipse: sequelize.STRING,
        image: sequelize.STRING,
        solution: sequelize.STRING,
        cost: sequelize.STRING,
        // standarts: sequelize.STRING,
        profession_name: sequelize.STRING,
        timeStamp: sequelize.STRING,
        isSavedToReport: sequelize.BOOLEAN
    }
);

Problem.hasMany(
    Standart,
    {
        foreignKey: 'id'
    }
);