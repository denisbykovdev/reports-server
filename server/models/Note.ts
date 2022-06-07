import sequelize from "sequelize";
import { sequelizeConnection } from "../services/db";
import { Report } from "./Report";

export const Note = sequelizeConnection.define(
    'notes',
    {
        id: {
            type: sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        text: sequelize.STRING,
        // report_id: sequelize.INTEGER
    }
);

// Note.belongsTo(
//     Report,
//     {
//         foreignKey: "report_id"
//     }
// );