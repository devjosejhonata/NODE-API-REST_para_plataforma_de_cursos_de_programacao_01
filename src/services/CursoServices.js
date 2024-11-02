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

    // Método para buscar todos os cursos com paginação
    async pegaTodosPaginado(page, limit) {
        const offset = (page - 1) * limit; // Calcula o offset para a consulta
        const { count, rows } = await this.model.findAndCountAll({
            limit, // Limite de cursos por página
            offset, // Offset para pular os cursos já contados
            order: [['titulo', 'ASC']], // Ordena os resultados pelo nome
        });
        const totalPaginas = Math.ceil(count / limit); // Calcula o total de páginas

        if (page > totalPaginas && totalPaginas > 0) throw new Error('Página não encontrada');

        return { cursos: rows, totalPaginas, totalCursos: count }; // Retorna os cursos, total de páginas e total de cursos
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
