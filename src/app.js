import 'dotenv/config'
import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import { dbConnect } from './database.js'
import { routerAffiliation } from './routes/v1/affiliation.routes.js'
import { routerState } from './routes/v1/state.routes.js'
import { routerEntity } from './routes/v1/entity.routes.js'
import { routerTown } from './routes/v1/town.routes.js'
import { routerRol } from './routes/v1/rol.routes.js'

const PORT = process.env.PORT || 3000

const app = express();
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1', routerAffiliation)
app.use('/api/v1', routerState)
app.use('/api/v1', routerEntity)
app.use('/api/v1', routerTown)
app.use('/api/v1', routerRol)

dbConnect().then(() => { console.info('Connect to DB') })

app.listen(PORT, () => console.info(`Listen on http://127.0.0.1:${PORT}`))