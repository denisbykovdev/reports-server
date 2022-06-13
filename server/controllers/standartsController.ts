import { Request, Response } from 'express';
import { Standart } from '../models/Standart';
import { TestImage } from '../views/TestImage';

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

        // if (standarts) {
        //     const fullStandarts = standarts.map(
        //         standart =>
        //         ({
        //             id: standart.id,
        //             text: standart.text,
        //             whatToDo: standart.whatToDo,
        //             fault: standart.fault,
        //             profession: standart.profession,
        //             image: TestImage as string
        //         })
        //     );
        //     res.status(200).send(fullStandarts);
        // };
        res.status(200).send(standarts);

    } catch (error) {
        console.log(
            `--- standartsController/error:`,
            error
        );
        res.status(500).send({ message: 'server error' });
    };
};