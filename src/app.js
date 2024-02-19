import express from 'express';
import morgan from  'morgan';
import cors from 'cors';
import affiliations from './routes/affiliations.routes';
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/v1/affiliations',affiliations);
export default  app;