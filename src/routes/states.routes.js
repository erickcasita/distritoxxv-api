import { Router } from "express"
import { getAll } from '../controllers/states.controllers.js'

const routerStates = Router()

routerStates

    .get('/states', getAll)

export { routerStates }