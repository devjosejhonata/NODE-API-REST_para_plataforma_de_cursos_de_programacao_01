/*
- Dentro de index.js na pasta routes, vamos ter o ponto de entrada das rotas da aplicação.
- Este arquivo é responsável por integrar as diferentes rotas da aplicação.
*/

const express = require('express');

// Importando as rotas relacionadas às entidades pessoas, categorias e cursos
// a rota matricula foi importada dentro de pessoasRoute.js
const pessoas = require('./pessoasRoute.js'); 
const categorias = require('./categoriasRoute.js'); 
const cursos = require('./cursosRoute.js'); 

// Exportando a função que inicializa as rotas  
module.exports = (app) => {
    
  // Configurando o middleware para aceitar JSON nas requisições
  app.use(express.json(), pessoas, categorias, cursos); // Usando o middleware e as rotas de pessoas, categorias, cursos
};
