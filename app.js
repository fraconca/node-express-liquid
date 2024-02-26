const express = require('express');
const app = express();
const port = 8080;


// importar e instanciar o LiquidJS
var { Liquid } = require('liquidjs');
var engine = new Liquid();


// Registrar Template Engine LiquidJS
app.engine('liquid', engine.express());         // Registrar Engine Liquid
app.set('views', './views');                    // Especifica o diretório das views
// app.set('views', ['./views', './views-blocks'])      // Alternativa para especificar mais de um diretório para views
app.set('view engine', 'liquid');               // Configura o Liquid como padrão


// Rota inicial
app.get('/', function (req, res) {
    res.render('index')
});


// Exportar app.js como módulo para o arquivo index.js
module.exports = app;