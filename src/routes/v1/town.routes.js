import { Router } from "express"
import { getAll, getByEntity } from '../../controllers/town.controllers.js'

const routerTown = Router()

routerTown

    .get('/towns', getAll)

    .get('/towns/:entity', getByEntity)

export { routerTown }