import { Request, Response } from 'express';
import { Report } from '../models/Report';
import { Writable } from 'stream';
import { pipeline } from 'stream/promises';
// import * as sequelizeStream from 'node-sequelize-stream';
// import { sequelizeConnection } from '../services/db';

// sequelizeStream(sequelizeConnection, 50, true);

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
        const stream = new Writable();

        const data = [];

        stream.on(
            'data',
            (
                chunk
            ) => {
                data.push(
                    chunk as never
                );
            }
        );
        
        stream.on(
            'end',
            () => {
                new Promise(
                    async resolve => {
                        const reports = await Report.findAll();
                        resolve(reports);
                    }
                );
            }
        );

        // const stream = Report. findAllWithStream()
        
        stream.pipe(
            res
        );

    } catch (error) {
        res.status(500).send({ message: 'server error' })
    }
}