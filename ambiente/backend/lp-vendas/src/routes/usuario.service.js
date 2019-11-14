const rotas = require('express').Router();
const itemController = require('../controller/usuario.controller');

rotas.route('/')
    .post(itemController.insert);
