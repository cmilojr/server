const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers/helpers');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname+'/public'));
//HBS ENGINE
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// ACÁ CONFIGURO EL PASO DE PAGINAS
app.get('/home', (req, res) => {
//     let salida = {
//         nombre: "Camilo",
//         edad: 22,
//         sexo: "M",
//         url: req.url
//     }
//   res.send(salida)
    res.render('home',{
        nombre: 'CaMilo',
    });
});

app.get('/about', (req, res) => {
        res.render('about');
    });

app.listen(port,() => {
    console.log(`escuchando puerto ${port}`);
});