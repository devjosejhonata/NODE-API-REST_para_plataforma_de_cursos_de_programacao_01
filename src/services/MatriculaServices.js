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

    // Método para obter a quantidade de matrículas e os IDs dos cursos por ID do estudante
    async obterQuantidadeECursosPorEstudante(estudante_id) {
        const [total, matriculas] = await Promise.all([
            this.model.count({
                where: {
                    estudante_id,
                    status: 'matriculado' // Considerando apenas matrículas com status 'matriculado'
                }
            }),
            this.model.findAll({
                where: {
                    estudante_id,
                    status: 'matriculado'
                },
                attributes: ['curso_id'] // Retorna apenas os IDs dos cursos
            })
        ]);

        return { total, cursos: matriculas.map(({ curso_id }) => curso_id) }; // Retorna contagem e IDs dos cursos
    }

}

module.exports = MatriculaServices; // Exportando a classe MatriculaServices
