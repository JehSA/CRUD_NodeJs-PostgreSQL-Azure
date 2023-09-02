/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas connctionStrings da aplicação: PostgreSQL.
 * Data: 02/09/2023
 * Author: Jefferson Almeida
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// => Conexão com a base de dados.
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Base de dados conectada com sucesso!');
});

module.exports = {
    query: (text, params) => pool.query(text.params)
}