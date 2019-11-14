const express = require ('express');
const router = require('./controller/router');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

const PORTA = 8080;

app.use('/', express.static('./public'));
app.use('/edit/:id', express.static('./public/edit'));
app.use('/itens', router);

app.listen(PORTA, () => console.log('rodando na '+ PORTA));