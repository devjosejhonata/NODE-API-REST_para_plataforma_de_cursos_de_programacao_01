/*
- Este arquivo define a classe CursoServices, que herda da classe Service.
- O objetivo é criar um serviço específico para manipular os dados relacionados à entidade Curso,
utilizando métodos genéricos da classe Service e estendendo-os quando necessário.
*/

const Service = require('./Service.js'); // Importando a classe Service, que é a base para serviços

class CursoServices extends Service {

    // O construtor chama a classe pai (Service) passando o nome do modelo 'Curso'
    constructor() {
        super('Curso');
    }
}

module.exports = CursoServices; // Exportando a classe CursoServices
