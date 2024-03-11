import { Router } from "express"
import { getAll, getById, create,update } from '../../controllers/affiliation.controllers.js'

const routerAffiliation = Router()

routerAffiliation

    .get('/affiliations', getAll)

    .get('/affiliations/:id', getById)

    .post('/affiliations', create)
    
    .put('/affiliations/edit/:id',update)

export { routerAffiliation }