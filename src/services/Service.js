/*
- Este arquivo define a classe genérica Service, que é responsável por lidar com as operações 
comuns entre diferentes modelos de dados.
- A classe Service faz a conexão entre os controladores e o modelo, permitindo operações como 
a busca de todos os registros de uma tabela específica.
- Essa camada de service permite aplicar regras e lógica antes de interagir diretamente com o banco de dados.
*/

// Executando todo o código dentro de models/index.js para acessar os modelos de dados
const dataSource = require('../models');

class Service {
    // O construtor recebe o nome do modelo para ser usado nas operações do service
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }

    // Método genérico para buscar todos os registros de um determinado modelo
    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }
}

module.exports = Service;
