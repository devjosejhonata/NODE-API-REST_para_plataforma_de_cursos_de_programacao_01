/*
- O arquivo app.js é responsável por definir as rotas da aplicação.
- Aqui, inicializamos o servidor Express e aplicamos as rotas definidas para a aplicação.
*/

const express = require('express'); // Importando o módulo express
const routes = require('./routes'); // Importando o arquivo de rotas

const app = express(); // Inicializando o express
routes(app); // Inicializando as rotas com a aplicação

module.exports = app; // Exportando o app para ser usado em outros arquivos
