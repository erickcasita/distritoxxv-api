import { Router } from "express"
import { getAll } from '../../controllers/state.controllers.js'

const routerState = Router()

routerState

    .get('/states', getAll)

export { routerState }