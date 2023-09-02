/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada das(s) API´s da aplicação.
 * Data: 01/09/2023
 * Author: Jefferson Almeida
 */

const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem vindo(a) a API Node.js + PostgresSQL + Azure!',
        version: '1.0.0'
    });
});

module.exports = router;