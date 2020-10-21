// PREPARACIONES
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts')



// CONFIGURACIONES
// Configuraciones generales
const port = 3000;
// Configuraciones de las vistas
app.use(expressLayouts)
app.set('views', './views');
app.set('layout', './layouts/fullscreen','./layouts/dashboard');
app.set('view engine','ejs');
// Configuraciones del directorio público
app.use(express.static('./public'));
// Configuraciones de rutas
const web_routes = require('./routes/web').routes

// RUTAS WEB
app.use('/',web_routes)

// PUERTO
app.listen(port,()=>{
    console.log('ESCUCHANDO DESDE EL PUERTO {port}');
});

module.exports = app;