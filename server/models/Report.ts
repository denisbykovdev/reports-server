import { IReportInstance } from "../@types/IReport";
import sequelize from "sequelize";
import { sequelizeConnection } from "../services/db";
import { Area } from "./Area";
import { Note } from "./Note";

export const Report = sequelizeConnection.define<IReportInstance>(
    'reports',
    {
        id: {
            type: sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        report_related_documents: sequelize.STRING,
        report_adress: sequelize.STRING,
        report_name: sequelize.STRING,
        status: sequelize.STRING,
        previous_test_id: sequelize.STRING,
        examination_date: sequelize.STRING,
        test_time: sequelize.STRING,
        customer_name: sequelize.STRING,
        tester_name: sequelize.STRING,
        test_relevance: sequelize.STRING,
        test_address_city: sequelize.STRING,
        test_address: sequelize.STRING,
        report_post_address_city: sequelize.STRING,
        report_post_address: sequelize.STRING,
        phone_number: sequelize.STRING,
        email: sequelize.STRING,
        other_email: sequelize.STRING,
        visit_escort: sequelize.STRING,
        customer_full_name: sequelize.STRING,
        opposite_side: sequelize.STRING,
        customer_logo: sequelize.STRING,
        vat_in_percent: sequelize.STRING,
        form: sequelize.STRING,
        floor: sequelize.STRING,
        technical_floor: sequelize.STRING,
        systems: sequelize.STRING,
        number_of_shared_buildings: sequelize.STRING,
        parking_levels: sequelize.STRING,
        roof_levels: sequelize.STRING,
        upper_reservoir: sequelize.STRING,
        bottom_reservoir: sequelize.STRING,
        shared_systems_with_additional_buildings: sequelize.STRING,
        com_areas_in_test: sequelize.STRING,
        exam_comm_areas: sequelize.STRING,
        resume: sequelize.STRING,
        is_resume_template: sequelize.STRING,
        more_systems: sequelize.STRING,
        timeStamp: sequelize.STRING,
        //optional if areas have no assosiations with reports
        // areas: sequelize.STRING,
        // notes: sequelize.STRING
    }
);

Report.hasMany(
    Area, 
    { 
        foreignKey: "id",
        as: "areas"
    }
);

Report.hasMany(
    Note,
    {
        foreignKey: 'id',
        as: "notes"
    }
);

