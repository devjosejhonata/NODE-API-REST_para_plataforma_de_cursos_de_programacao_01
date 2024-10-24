/*
- Este arquivo define a classe PessoaServices, que herda da classe Service para manipular a entidade Pessoa.
- O objetivo é criar um serviço específico para Pessoa, utilizando os métodos genéricos da classe Service 
e estendendo-os com lógica adicional quando necessário.
*/

const Service = require('./Service.js');

class PessoaServices extends Service {
    // O construtor chama a classe pai (Service) passando o nome do modelo 'Pessoa'
    constructor() {
        super('Pessoa');
    }
}

module.exports = PessoaServices;
