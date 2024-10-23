/*
- Dentro de index.js na pasta routes, vamos ter o ponto de entrada das rotas da aplicação.
- Este arquivo é responsável por integrar as diferentes rotas da aplicação.
*/

const express = require('express');
const pessoas = require('./pessoasRoute.js'); // Importando as rotas relacionadas à entidade Pessoa

// Exportando a função que inicializa as rotas  
module.exports = (app) => {
    
  // Configurando o middleware para aceitar JSON nas requisições
  app.use(express.json(), pessoas); // Usando o middleware e as rotas de pessoas
};
