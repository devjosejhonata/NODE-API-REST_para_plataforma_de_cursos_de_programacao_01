/*
- Este arquivo define a classe MatriculaServices, que herda da classe Service.
- O objetivo é criar um serviço específico para manipular os dados relacionados à entidade Matricula,
utilizando métodos genéricos da classe Service e estendendo-os quando necessário.
*/

const Service = require('./Service.js'); // Importando a classe Service, que é a base para serviços

class MatriculaServices extends Service {

    // O construtor chama a classe pai (Service) passando o nome do modelo 'Matricula'
    constructor() {
        super('Matricula');
    }
}

module.exports = MatriculaServices; // Exportando a classe MatriculaServices
