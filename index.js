import app from './app.js';
import DB from './database.js';

app.listen(app.get('puerto'),()=>console.log("Servidor en línea " + app.get('puerto')) );