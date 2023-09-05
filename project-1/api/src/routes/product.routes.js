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

// => Rota responsável por buscar todos os "Product's" -  (GET): localhost:3000/api/products
router.get('/products', productController.listAllProducts);

// => Rota responsável por selecionar um "Product" por Id -  (GET): localhost:3000/api/products/:id
router.get('/products/:id', productController.findProductById);

// => // => Rota responsável por editar um "Product" por Id -  (GET): localhost:3000/api/products/:id
router.put('/products/:id', productController.updateProductById);

// => Rota responsável por excluir um "Product" por Id -  (GET): localhost:3000/api/products/:id
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;