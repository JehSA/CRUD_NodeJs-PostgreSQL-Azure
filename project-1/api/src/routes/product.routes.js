/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas rotas da API relacionadas ao CRUD (classe 'Product').
 * Data: 02/09/2023
 * Author: Jefferson Almeida
 */

const router = require('express-promise-router')();
const productController = require('../controllers/product.controllers');


// => Definindo as rotas do CRUD - Products

// => Rota responsável por criar um novo 'Product' -  (POST): localhost:3000/api/products
router.post('/products', productController.createProduct);

module.exports = router;