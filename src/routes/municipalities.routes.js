import { Router } from "express"
import { getAll } from '../controllers/municipalities.controllers.js'

const routerMunicipalities = Router()

routerMunicipalities

    .get('/municipalities', getAll)

export { routerMunicipalities }