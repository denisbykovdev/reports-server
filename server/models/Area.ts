import sequelize from "sequelize";
import { IAreaInstance } from "../@types/IArea";
import { sequelizeConnection } from "../services/db";
import { AreaProblem } from "./AreaProblem";
import { Problem } from "./Problem";

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
        samples: sequelize.STRING
    }
);

Area.hasMany(
    Problem,
    {
        foreignKey: 'id'
    }
);

// Area.belongsToMany(
//     Problem, 
//     { 
//         through: AreaProblem,
//         foreignKey: 'problem_id',
//         // type: sequelize.INTEGER
//         as: 'problems'
//     }
// );

// Problem.belongsToMany(
//     Area, 
//     { 
//         through: AreaProblem,
//         foreignKey: 'area_id',
//         // foreignKeyConstraint: false,
//         // targetKey: 'id',
//         // as: 'areas'
//     }
// );
