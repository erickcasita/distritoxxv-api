import 'dotenv/config'
import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import { dbConnect } from './database.js'
import { routerAffiliations } from './routes/affiliations.routes.js'
import { routerStates } from './routes/states.routes.js'
import { routerMunicipalities } from './routes/municipalities.routes.js'
import { routerColonies } from './routes/colonies.routes.js'

const PORT = process.env.PORT || 3000

const app = express();
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(routerAffiliations)
app.use(routerStates)
app.use(routerMunicipalities)
app.use(routerColonies)

dbConnect().then(() => { console.info('Connect to DB') })

app.listen(PORT, () => console.info(`Listen on http://127.0.0.1:${PORT}`))