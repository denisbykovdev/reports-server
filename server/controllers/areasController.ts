import { Request, Response } from 'express';
import { Area } from '../models/Area';
import { Problem } from '../models/Problem';
import { Sample } from '../models/Sample';

export default async function areasController(
    req: Request,
    res: Response
): Promise<void> {
    console.log(
        `--- areasController/req.body:`, req.body
    );
    // console.log(
    //     `--- areasController/req.user:`, req.user
    // );
    // console.log(
    //     `--- areasController/req.files:`, req.files
    // );
    try {
        const areas = await Area.findAll({
            include: [
                {
                    model: Problem,
                    as: 'problems'
                },
                {
                    model: Sample,
                    as: 'samples'
                }
            ]
        });

        console.log(`--- areasController:`, areas);

        if(areas) {
            res.status(200).send(areas);
        };

    } catch (error) {
        console.log(
            `--- areasController/error:`,
            error
        );
        res.status(500).send({ message: 'server error' });
    };
};