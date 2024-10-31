/*
- Este arquivo define a classe CursoServices, que herda da classe Service.
- O objetivo é criar um serviço específico para manipular os dados relacionados à entidade Curso,
utilizando métodos genéricos da classe Service e estendendo-os quando necessário.
*/

const Service = require('./Service.js'); // Importando a classe Service, que é a base para serviços
const { Op } = require('sequelize'); // Importando Op para usar operadores do Sequelize

class CursoServices extends Service {

    // O construtor chama a classe pai (Service) passando o nome do modelo 'Curso'
    constructor() {
        super('Curso');
    }

   // Método genérico para buscar cursos por data ou intervalo de datas
    async pegaPorDataOuIntervalo(dataInicio, dataFim = null) {
        const condicoes = dataFim ? {
            data_inicio: {
                [Op.gte]: new Date(dataInicio), // Data inicial (maior ou igual)
                [Op.lte]: new Date(dataFim)    // Data final (menor ou igual)
            }
        } : {
            data_inicio: dataInicio // Filtra os cursos pela data de início
        };

        return this.model.findAll({ where: condicoes });
    }
}

module.exports = CursoServices; // Exportando a classe CursoServices
