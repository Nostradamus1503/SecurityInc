const express    = require('express');
const bodyParser = require('body-parser');
const moment     = require('moment');

const app = express();

// tablas y datos

var _seguros = [

    {id: 1, nombre: 'Seguro Contra Terceros Completo', tipo:'automotor' },
    {id: 2, nombre: 'Seguro Contra Robo e Incendio', tipo: 'vivienda' },
    {id: 3, nombre: 'Seguro de Vida 450', tipo: 'persona' }

];

var _clientes = [

    {id: 1, nombre: 'Marcos Menendez', dni:20340490 },
    {id: 2, nombre: 'Virginia Villanueva', dni:33355496 },
    {id: 3, nombre: 'Jorge Visconti', dni:25350627 }

];

var _polizas = [

    {id: 1, id_seguro: 1, id_cliente: 2, fecha_inicio: '01/01/2016', fecha_fin: '31/12/2016', importe: 340 },
    {id: 2, id_seguro: 1, id_cliente: 2, fecha_inicio: '01/03/2018', fecha_fin: '28/02/2019', importe: 340 },
    {id: 3, id_seguro: 2, id_cliente: 1, fecha_inicio: '01/01/2018', fecha_fin: '31/12/2019', importe: 340 },
    {id: 4, id_seguro: 3, id_cliente: 1, fecha_inicio: '01/12/2017', fecha_fin: '30/11/2018', importe: 340 },
    {id: 5, id_seguro: 3, id_cliente: 3, fecha_inicio: '01/01/2017', fecha_fin: '31/12/2017', importe: 340 },
    {id: 6, id_seguro: 1, id_cliente: 3, fecha_inicio: '16/10/2017', fecha_fin: '15/10/2018', importe: 340 },

];



// api Clientes


app.get('/Clients', (req, res) => {

    res.json(_clientes);

});



// get clients by id

app.get('/Clients/:id', (req, res) => {

    let cli = _clientes.find(c => c.id == req.params.id);

    if(cli) {

        res.json(cli);

    } else {

        res.status(404).end();
    }
});



// add new client - Content Type: json

app.post('/Clients', (req, res) => {

    _clientes.push(req.body);

    res.status(201).send(req.body);

});



app.delete('/Clients/:id', (req, res) => {

    _clientes = _clientes.filter(c => c.id != req.params.id);

    res.status(204).end();

});


// api Seguros


app.get('/Securities', (req, res) => {

    res.json(_seguros);

});



// get security by id

app.get('/Securities/:id', (req, res) => {

    let seg = _seguros.find(c => c.id == req.params.id);

    if(seg) {

        res.json(seg);

    } else {

        res.status(404).end();
    }
});



// add new security - Content Type: json

app.post('/Securities', (req, res) => {

    _seguros.push(req.body);

    res.status(201).send(req.body);

});



app.delete('/Securities/:id', (req, res) => {

    _seguros = _seguros.filter(c => c.id != req.params.id);

    res.status(204).end();

});



// start server

app.listen(process.env.PORT || 3000, function () {

    console.log('API andando con express...');

});
