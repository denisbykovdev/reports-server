import express, { Router } from 'express'

import rootController from '../controllers/rootController'

const rootRouter: express.Router = Router()

rootRouter.get('/*', rootController)

export default rootRouter
