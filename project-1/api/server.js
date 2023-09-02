/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração e execução da aplicação.
 * Data: 01/09/2023
 * Author: Jefferson Almeida
 */

const app = require('./src/app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação rodando na porta: ', port);
});