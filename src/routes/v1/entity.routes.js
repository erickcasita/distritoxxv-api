import { Router } from "express"
import { getAll } from '../../controllers/entity.controllers.js'

const routerEntity = Router()

routerEntity

    .get('/entities', getAll)

export { routerEntity }