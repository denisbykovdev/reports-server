import { Request, Response } from 'express';
import { Problem } from '../models/Problem';
import { Standart } from '../models/Standart';

export default async function problemsController(
    req: Request,
    res: Response
): Promise<void> {
    console.log(
        `--- problemsController/req.body:`, req.body
    );
    // console.log(
    //     `--- problemsController/req.user:`, req.user
    // );
    // console.log(
    //     `--- problemsController/req.files:`, req.files
    // );
    try {
        const problems = await Problem.findAll({
            include: [
                {
                    model: Standart,
                    as: 'standarts'
                }
            ]
        });

        console.log(`--- problemsController:`, problems);

        if(problems) {
            res.status(200).send(problems);
        };

    } catch (error) {
        console.log(
            `--- problemsController/error:`,
            error
        );
        res.status(500).send({ message: 'server error' });
    };
};