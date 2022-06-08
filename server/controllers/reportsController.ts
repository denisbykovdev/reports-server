import { Request, Response } from 'express';
import { Report } from '../models/Report';
import { Area } from '../models/Area';
import { Note } from '../models/Note';
import { sequelizeConnection } from '../services/db';
import { Readable } from 'stream';

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
        //     objectMode: true,
        //     // highWaterMark: 1200,
        //     async read() {
        //         //string stream
        //         // const reports = await sequelizeConnection.query('select * from reports');

        //         //object stream
        //         const reports = await Report.findAll(
        //             {
        //                 include: [
        //                     {
        //                         model: Area,
        //                         as: 'areas'
        //                     },
        //                     {
        //                         model: Note,
        //                         as: 'notes'
        //                     }
        //                 ]
        //             }
        //         );

        //         // string stream
        //         // let isContinuedStream = this.push(reports);
        //         // if(!isContinuedStream) this.push(null);

        //         //object stream
        //         this.push(reports);
        //         this.push(null);

        //         console.log(
        //             `\n--- readableStream/reports(pure):\n`, reports,
        //             `\n--- readableStreamreports:\n`, this
        //         );
        //     }
        // });

        // const reports = await sequelizeConnection.query('select * from reports');

        // let data: any[] = [];

        //Promisifing stream
        // await new Promise((resolve, reject) => {
        //     readableStream.on("data", (chunk) => {
        //         console.log(
        //             `--- stream/data:`, JSON.stringify(chunk)
        //         );
        //         data.push(chunk);
        //     });
    
        //     readableStream.on("end", () => {
        //         console.log(
        //             `--- stream/end`
        //         );
        //         resolve;
        //     });

        //     readableStream.on("error", (error) => {
        //         console.log(
        //             `--- stream/error:`, error
        //         );
        //         reject;
        //     });
        // });

        //Async iterable stream
        // try {
        //     for await (const chunk of readableStream) {
        //         // data.push(chunk);
        //         data = [...chunk];
                
        //         console.log(
        //             `\n--- readableStream/chunk length: ${chunk.bytes}bytes`,
        //             `\n--- readableStream/chunk(pure):\n`, chunk,
        //             `\n--- readableStream/data:\n`, data
        //         );
        //     };
        // } catch (error) {
        //     console.log(
        //             `--- readableStream/error:`, error
        //     );
        // };

        // readableStream.pipe(
        //     res.send(data)
        // );

    } catch (error) {
        console.log(
            `--- reportsController/error:`,
            error
        );
        res.status(500).send({ message: 'server error' });
    };
};