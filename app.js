const express = require('express');
const app = express();


// importar e instanciar o LiquidJS
var { Liquid } = require('liquidjs');
var engine = new Liquid();


// Registrar Template Engine LiquidJS
app.engine('liquid', engine.express());         // Registrar Engine Liquid
app.set('views', './views');                    // Especifica o diretório das views
// app.set('views', ['./views', './views-blocks'])      // Alternativa para especificar mais de um diretório para views
app.set('view engine', 'liquid');               // Configura o Liquid como padrão


// Rota '/'
app.get('/', function (req, res) {
    res.render('index');
});


// Rota '/sobre'
app.get('/sobre', function (req, res) {

    const tecnologias = ['ReactJS', 'ExpressJS', 'LiquidJS'];

    const dia = new Date();
    let ano = dia.getFullYear();

    res.render('sobre', {
      projeto: tecnologias,
      title: 'Boas vindas ao LiquidJS!',
      esteAno: ano
    });

});


// Exportar app.js como módulo para o arquivo index.js
module.exports = app;