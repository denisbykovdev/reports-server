import { Request, Response } from 'express';
import { Standart } from '../models/Standart';

export default async function standartsController(
    req: Request,
    res: Response
): Promise<void> {
    console.log(
        `--- standartsController/req.body:`, req.body
    );
    // console.log(
    //     `--- standartsController/req.user:`, req.user
    // );
    // console.log(
    //     `--- standartsController/req.files:`, req.files
    // );
    try {
        const standarts = await Standart.findAll();

        console.log(`--- standartsController:`, standarts);

        if(standarts) {
            res.status(200).send(standarts);
        };

    } catch (error) {
        console.log(
            `--- standartsController/error:`,
            error
        );
        res.status(500).send({ message: 'server error' });
    };
};