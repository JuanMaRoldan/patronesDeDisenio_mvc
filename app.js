const express = require('express');
const app = express();
const path = require('path');
const port = 3000 ;
/* Recursos estaticos */
app.use(express.static(path.join(__dirname,'public')));


/* Motor de Vistas */
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');


/* Rutas */
const mainRouter = require('./routes/main');

app.use('/', mainRouter)

/* app.get('/', (req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')));
app.get('/about', (req,res) => res.sendFile(path.resolve(__dirname,'views', 'about.html')));
 */
app.listen(port, () => {
    console.log('Server running in http://localhost:${port}');
})