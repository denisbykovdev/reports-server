import { Router } from 'express';
import areasController from '../controllers/areasController';
import problemsController from '../controllers/problemsController';
import reportsController from '../controllers/reportsController';
import standartsController from '../controllers/standartsController';

const reportsRouter = Router();

reportsRouter.get(
    '/reports',
    reportsController
);

reportsRouter.get(
    '/areas',
    areasController
);

reportsRouter.get(
    '/problems',
    problemsController
);

reportsRouter.get(
    '/standarts',
    standartsController
);

export default reportsRouter;