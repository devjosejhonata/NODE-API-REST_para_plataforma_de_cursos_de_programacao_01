/*
- Este arquivo é responsável por inicializar o servidor.
*/

const app = require('./src/app.js');// Importando o app.js

const PORT = 3000;// Definindo a porta que o servidor vai escutar

// Inicializando o servidor na porta definida
app.listen(PORT, () => {
  console.log('Executando servidor na porta 3000!');
});
