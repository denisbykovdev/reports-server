import sequelize from "sequelize";
import { sequelizeConnection } from "../services/db";
import { IStandartInstance } from "../@types/IStandart";

export const Standart = sequelizeConnection.define<IStandartInstance>(
    'standarts',
    {
        id: {
            type: sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        text: sequelize.STRING,
        image: sequelize.STRING,
        whatToDo: sequelize.STRING,
        fault: sequelize.STRING,
        profession: sequelize.STRING,
        // problem_id: sequelize.INTEGER
    }
);
