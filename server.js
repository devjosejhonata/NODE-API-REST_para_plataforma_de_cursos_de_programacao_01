/*
- Este arquivo é responsável por inicializar o servidor.
- Ele importa a aplicação definida em app.js e a inicia na porta especificada.
*/

const app = require('./src/app.js'); // Importando a aplicação express configurada no app.js

const PORT = 3000; // Definindo a porta que o servidor vai escutar

// Inicializando o servidor na porta definida
app.listen(PORT, () => {
  // Callback que é executado quando o servidor está rodando
  console.log(`Executando servidor na porta ${PORT}!`); // Mensagem de confirmação no console
});
