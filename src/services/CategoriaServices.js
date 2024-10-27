/*
- Este arquivo define a classe CategoriaServices, que herda da classe Service.
- O objetivo é criar um serviço específico para manipular os dados relacionados à entidade Categoria,
utilizando métodos genéricos da classe Service e estendendo-os quando necessário.
*/

const Service = require('./Service.js'); // Importando a classe Service, que é a base para serviços

class CategoriaServices extends Service {

    // O construtor chama a classe pai (Service) passando o nome do modelo 'Categoria'
    constructor() {
        super('Categoria');
    }
}

module.exports = CategoriaServices; // Exportando a classe CategoriaServices
