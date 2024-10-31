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
        this.model = dataSource[nomeDoModel]; // Atribui o modelo Sequelize correto
    }

    // Método genérico para buscar todos os registros de um determinado modelo
    async pegaTodosOsRegistros() {
        // Utiliza o Sequelize para buscar todos os registros da tabela correspondente
        return this.model.findAll();
    }

    // Método para buscar um único registro pelo ID
    async pegaUmRegistroPorId(id) {
        // Usa findByPk para localizar um registro pela chave primária (ID)
        return this.model.findByPk(id);
    }

    //Serviço para buscar uma matricula pelo id
    async pegaUmRegistro(where) {
        return this.model.findOne({ where: { ...where } });
    }

    // Metodo para buscar um registro pelo scopo.
    async pegaRegistrosPorEscopo(escopo) {
        return this.model.scope(escopo).findAll();
    }

    // Método para criar um novo registro no banco de dados
    async criaRegistro(dadosDoRegistro) {
        return this.model.create(dadosDoRegistro);
    }

    // Método para atualizar um registro existente
    async atualizaRegistro(dadosAtualizados, where) {
        // Atualiza o registro onde o ID for correspondente
        const listadeRegistrosAtualizados = await this.model.update(dadosAtualizados, {
            where: { ...where }
        });
        
        // Se nenhum registro for atualizado, retorna falso
        if (listadeRegistrosAtualizados[0] === 0) {
            return false;
        }
        
        // Retorna verdadeiro se a atualização for bem-sucedida
        return true;
    }

    // Método para excluir um registro do banco de dados
    async excluiRegistro(id) {
        return this.model.destroy({ where: { id: id } });
    }
}

module.exports = Service;
