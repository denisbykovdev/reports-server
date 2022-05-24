import sequelize from "sequelize";
import { sequelizeConnection } from "../services/db";

export const Note = sequelizeConnection.define(
    'notes',
    {
        id: {
            type: sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        text: sequelize.STRING
    }
);