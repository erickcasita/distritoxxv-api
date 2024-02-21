import { Router } from "express"
import { getAll, getById, create } from '../controllers/affiliations.controllers.js'

const routerAffiliations = Router()

routerAffiliations

    .get('/affiliations', getAll)

    .get('/affiliations/:id', getById)

    .post('/affiliations', create)

export { routerAffiliations }