import { Router } from "express"
import { getAll, getByName } from '../../controllers/town.controllers.js'

const routerTown = Router()

routerTown

    .get('/towns', getAll)

    .get('/towns/:name', getByName)

export { routerTown }