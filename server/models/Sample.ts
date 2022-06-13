import sequelize from "sequelize";
import { IProblemInstance } from "../@types/IProblem";
import { sequelizeConnection } from "../services/db";
import { Standart } from "./Standart";

export const Sample = sequelizeConnection.define<IProblemInstance>(
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
        isSavedToReport: sequelize.BOOLEAN,
        // area_id: sequelize.INTEGER
    }
);

Sample.hasMany(
    Standart,
    {
        foreignKey: 'id',
        as: "standarts"
    }
);