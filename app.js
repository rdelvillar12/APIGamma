//Declaracion de variables locales
const express = require('express');
const app= express();
const bodyParser = require('body-parser')

//Asignando puerto a la API
const port = process.env.PORT || 3000;

//la ruta demo es http://localhost:3000

//Inicializando middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Para diferentes rutas
const router = require('./rutas/GammaReporte');
app.use('/',router);

//Iniciando API
app.listen(port);
console.log(`Escuchando en el puerto ${port}`);