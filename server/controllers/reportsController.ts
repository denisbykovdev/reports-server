import { Request, Response } from 'express';
import { Report } from '../models/Report';
import { Readable } from 'stream';
import { Area } from '../models/Area';
import { Note } from '../models/Note';
import { sequelizeConnection } from '../services/db';

export default async function reportsController(
    req: Request,
    res: Response
): Promise<void> {
    console.log(
        `--- reportsController/req.body:`, req.body
    );
    // console.log(
    //     `--- reportsController/req.user:`, req.user
    // );
    // console.log(
    //     `--- reportsController/req.files:`, req.files
    // );
    try {
        const reports = await Report.findAll({
            include: [
                {
                    model: Area,
                    as: 'areas'
                },
                {
                    model: Note,
                    as: 'notes'
                }
            ]
        });

        console.log(`--- reportsController:`, reports);

        if(reports) {
            res.status(200).send(reports);
        };

        // const readableStream = new Readable({
        //     objectMode: true
        // });

        // // readableStream.push('ping');

        // readableStream.read = async () => await sequelizeConnection.query('select * from reports');
        // // readableStream.read = async () => await Report.findAll();

        // const data: any[] = [];

        // async () => {
        //     for await (const chunk of readableStream) {
        //       console.log(
        //           `--- readableStream/length: \n${chunk.length}bytes: \n"${chunk.toString()}"\n`);

        //       data.push(chunk as any);
        //     }
        // };

        // readableStream.pipe(
        //     res
        // );

    } catch (error) {
        console.log(
            `--- reportsController/error:`,
            error
        );
        res.status(500).send({ message: 'server error' });
    };
};