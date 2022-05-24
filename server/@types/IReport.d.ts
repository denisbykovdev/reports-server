import { Model, Optional } from "sequelize/types";
import { IArea } from "./IArea";
import { INote } from "./INote";

export interface IReport {
    readonly id: number;
    report_related_documents: string[] | string;
    // report_related_documents: string;
    report_adress: string;
    report_name: string;
    status: string;
    previous_test_id: string;
    examination_date: string;
    test_time: string;
    customer_name: string;
    tester_name: string;
    test_relevance: string;
    test_address_city: string;
    test_address: string;
    report_post_address_city: string;
    report_post_address: string;
    phone_number: string;
    email: string;
    other_email: string;
    visit_escort: string;
    customer_full_name: string;
    opposite_side: string;
    customer_logo: string;
    vat_in_percent: string;
    form: string;
    floor: string;
    technical_floor: string;
    systems: string[] | string;
    // systems: string;
    number_of_shared_buildings: string;
    parking_levels: string;
    roof_levels: string;
    upper_reservoir: string;
    bottom_reservoir: string;
    shared_systems_with_additional_buildings: string;
    com_areas_in_test: string;
    exam_comm_areas: string;
    resume: string;
    is_resume_template: string;
    more_systems: string;
    timeStamp?: string[] | string;
    // timeStamp?: string;
    // areas?: string;
    // notes?: string;
    areas?: IArea[];
    notes?: INote[];
}

export interface IReportCreation extends Optional<IReport, 'id' | 'areas' | 'notes' | 'timeStamp'> {}


export interface IReportInstance extends Model<IReport, IReportCreation>, IReport {}
