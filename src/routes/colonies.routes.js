import { Router } from "express"
import { getAll } from '../controllers/colonies.controllers.js'

const routerColonies = Router()

routerColonies

    .get('/colonies', getAll)

export { routerColonies }