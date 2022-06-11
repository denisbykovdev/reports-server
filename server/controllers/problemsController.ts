import { Request, Response } from 'express';
import { Problem } from '../models/Problem';
import { Standart } from '../models/Standart';
import { TestImage } from '../views/TestImage';

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
            const fullProblems = problems.map(
                problem => 
                ({
                    name: problem.name,
                    id: problem.id,
                    profession_name: problem.profession_name,
                    details_of_eclipse: problem.details_of_eclipse,
                    cost: problem.cost,
                    standarts: problem.standarts,
                    solution: problem.solution,
                    isSavedToReport: false,
                    image: [TestImage as string]
                })
            )
            res.status(200).send(fullProblems);
        };

    } catch (error) {
        console.log(
            `--- problemsController/error:`,
            error
        );
        res.status(500).send({ message: 'server error' });
    };
};