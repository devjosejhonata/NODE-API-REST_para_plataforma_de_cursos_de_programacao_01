/*
- Este arquivo define a classe PessoaServices, que herda da classe Service.
- O objetivo é criar um serviço específico para manipular os dados relacionados à entidade Pessoa, 
utilizando métodos genéricos da classe Service e estendendo-os quando necessário.
*/

const Service = require('./Service.js'); // Importando a classe Service, que é a base para serviços

class PessoaServices extends Service {

    // O construtor chama a classe pai (Service) passando o nome do modelo 'Pessoa'
    constructor() {
        super('Pessoa');
    }

    async pegaMatriculasAtivasPorEstudante(id) {
        
        // Busca o estudante pelo ID usando o método da classe pai
        const estudante = await super.pegaUmRegistroPorId(id);
        
        // Retorna as aulas matriculadas do estudante filtrando pelo alias 'aulasMatriculadas'
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    }
    
    async pegaTodasAsMatriculasPorEstudante(id) {
        
        // Busca o estudante pelo ID usando o método da classe pai
        const estudante = await super.pegaUmRegistroPorId(id);
        
        // Retorna as aulas matriculadas do estudante filtrando pelo alias 'todasAsMatriculas'
        const listaMatriculas = await estudante.getTodasAsMatriculas();
        return listaMatriculas;
    }

    async pegaPessoasEscopoTodos() {
        const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');

        return listaPessoas;
    }

    // Metodo que atualiza o status das matrículas de um estudante, podendo ser para um curso específico ou para todos
    async atualizaStatusMatriculas(estudante_id, novoStatus, curso_id = null) {
        // Define o status como 'matriculado' ou 'cancelado' com base no novoStatus fornecido
        const status = novoStatus === 'matriculado' ? 'matriculado' : 'cancelado';
        
        // Define a cláusula where para selecionar as matrículas a serem atualizadas:
        // Se curso_id for fornecido, aplica a atualização apenas para a matrícula desse curso
        // Se curso_id for null, aplica a atualização para todas as matrículas do estudante
        const whereClause = curso_id 
            ? { estudante_id: estudante_id, curso_id: curso_id } 
            : { estudante_id: estudante_id };

        // Executa a atualização dos registros de matrícula com o status definido
        await this.model.sequelize.models.Matricula.update(
            { status: status },
            { where: whereClause }
        );
    }

}

module.exports = PessoaServices; // Exportando a classe PessoaServices
