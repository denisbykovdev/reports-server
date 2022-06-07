import sequelize from "sequelize";
import { IAreaInstance } from "../@types/IArea";
import { sequelizeConnection } from "../services/db";
import { Problem } from "./Problem";
import { Report } from "./Report";
import { Sample } from "./Sample";

export const Area = sequelizeConnection.define<IAreaInstance>(
    'areas',
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        area_name: sequelize.STRING,
        isSavedToReport: sequelize.BOOLEAN,
        // problems: sequelize.STRING,
        // samples: sequelize.STRING,
        report_id: sequelize.INTEGER
    }
);

// Area.belongsTo(
//     Report,
//     {
//         foreignKey: "report_id"
//     }
// );

Area.hasMany(
    Problem,
    {
        foreignKey: 'id',
        as: "problems"
    }
);

Area.hasMany(
    Sample,
    {
        foreignKey: 'id',
        as: 'samples'
    }
);