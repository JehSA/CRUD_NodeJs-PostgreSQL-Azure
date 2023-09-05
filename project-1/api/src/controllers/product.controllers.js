/*
 * Arquivo: src/controllers/product.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD da API 'Product'.
 * Data: 02/09/2023
 * Author: Jefferson Almeida
*/

const { response } = require('express');
const db = require('../config/database');

// => Método responsável por criar um novo produto.
exports.createProduct = async(req, res) => {
  const { product_name, quantity, price } = req.body;
  const response = await db.query(
    'INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)',
    [product_name, quantity, price]
  );
  res.status(201).send({
    message: 'Product added succesfully!',
    body: {
      product: { product_name, quantity, price }
    }
  });
};

// => Método responsável por selecionar todos os produtos.
exports.listAllProducts = async(req, res) => {
  const response = await db.query(
    'SELECT * FROM products ORDER BY product_name ASC'
  );
  res.status(200).send(response.rows);
};

// => Método responsável por selecionar um produto pelo Id.
exports.findProductById = async(req, res) => {
  const productId = parseInt(req.params.id);
  const response = await db.query(
    'SELECT * FROM products WHERE productid = $1',
    [productId]
  );
  res.status(200).send(response.rows);
};

// => Método responsável por editar um produto pelo Id.
exports.updateProductById = async(req, res) => {
  const productId = parseInt(req.params.id);
  const { product_name, quantity, price } = req.body;
  const response = await db.query(
    'UPDATE products SET product_name = $1, quantity = $2, price = $3 WHERE productid = $4',
    [product_name, quantity, price, productId]
  );
  res.status(200).send({ message: 'Product updated successfully!' });
};

// => Método responsável por deletar um produto pelo Id.
exports.deleteProductById = async(req, res) => {
  const productId = parseInt(req.params.id);
  await db.query('DELETE FROM products WHERE productid = $1', [productId]);
  res.status(200).send({ message: 'Product delete successfully!', productId });
};