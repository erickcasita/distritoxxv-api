import express from 'express';
import affiliations from './routes/affiliations.routes';
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use('/api/v1/affiliations',affiliations);
export default  app;