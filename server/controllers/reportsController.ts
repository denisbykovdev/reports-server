import { Request, Response } from 'express';
import { Report } from '../models/Report';

export default async function reportsController(
    req: Request,
    res: Response
): Promise<void> {
    console.log(
        `--- reportsController/req.body:`, req.body
    );
    console.log(
        `--- reportsController/req.user:`, req.user
    );
    console.log(
        `--- reportsController/req.files:`, req.files
    );
    try {
        async function test() {
            try {
                const reports = await Report.findAll();
                
                console.log(`--- test/reports:`, reports)
                
            } catch (error) {
                console.log(error)
            }
        };

        await test();

    } catch (error) {
        res.status(500).send({ message: 'server error' })
    }
}