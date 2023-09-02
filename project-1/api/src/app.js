/**
 * Arquivo: app.js
 * Descrição: arquivo faz a comunicação do server com o resto a aplicação.
 * Data: 01/09/2023
 * Author: Jefferson Almeida
 */

const express = require('express');
const cors = require('cors');

const app = express();

// => Rotas da API
const index = require('./routes/index');
const productRoute = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', productRoute);

module.exports = app;