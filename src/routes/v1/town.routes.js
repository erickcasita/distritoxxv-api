import { Router } from "express"
import { getAll } from '../../controllers/town.controllers.js'

const routerTown = Router()

routerTown

    .get('/towns', getAll)

export { routerTown }