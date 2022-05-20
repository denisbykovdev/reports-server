import { Router } from 'express';
import reportsController from '../controllers/reportsController';

const reportsRouter = Router();

reportsRouter.get(
    '/reports',
    reportsController
);

export default reportsRouter;