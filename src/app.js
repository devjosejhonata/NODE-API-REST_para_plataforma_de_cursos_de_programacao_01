/*
- O arquivo app.js é responsável por definir as rotas da aplicação.
*/

const express = require('express');// Importando o módulo express

const app = express();// Inicializando o express

app.use(express.json());// Habilitando o uso de JSON no express

// Definindo a rota principal, que retorna uma mensagem de boas-vindas
app.get('/teste', (req, res) => {
  res
    .status(200)
    .send({ mensagem: 'boas-vindas à API' });
});

module.exports = app;// Exportando o app para ser usado em outros arquivos
