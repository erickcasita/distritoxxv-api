import app from './app';
import './database';
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));

console.log('Server Connect on port', 3000);