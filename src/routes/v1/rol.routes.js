import { Router } from "express"
import { getAll } from '../../controllers/rol.controllers.js'

const routerRol = Router()

routerRol

    .get('/roles', getAll)

export { routerRol }