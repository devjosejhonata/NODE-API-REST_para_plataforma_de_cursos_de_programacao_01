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

    // Busca pessoas ativas com paginação
    async pegaPessoasAtivasPaginado(page, limit) {
        
        const offset = (page - 1) * limit; // Calcula o deslocamento (offset) com base na página atual e no limite de resultados por página

        // Realiza a busca no banco de dados, contando e buscando as pessoas ativas
        const { count, rows } = await this.model.findAndCountAll({
            where: { ativo: true }, // Filtra para incluir apenas pessoas ativas
            limit, // Limita o número de resultados retornados
            offset, // Aplica o deslocamento para a paginação
            order: [['nome', 'ASC']], // Ordena os resultados pelo nome em ordem ascendente
        });

        const totalPaginas = Math.ceil(count / limit); // Calcula o total de páginas com base na contagem total de pessoas ativas e o limite

        if (page > totalPaginas) throw new Error('Página não encontrada'); // Verifica se a página solicitada existe, lançando um erro se for maior que o total de páginas

        return { pessoas: rows, totalPaginas, totalPessoas: count }; // Retorna um objeto contendo as pessoas encontradas, o total de páginas e o total de pessoas
    }

    // Busca todas as pessoas (ativas e inativas) com paginação
    async pegaTodasAsPessoasPaginado(page, limit) {

        const offset = (page - 1) * limit;

        // Realiza a busca no banco de dados, contando e buscando todas as pessoas
        const { count, rows } = await this.model.findAndCountAll({
            limit, 
            offset, 
            order: [['nome', 'ASC']], 
        });

        const totalPaginas = Math.ceil(count / limit);

        if (page > totalPaginas) throw new Error('Página não encontrada');

        return { pessoas: rows, totalPaginas, totalPessoas: count };
    }

}

module.exports = PessoaServices; // Exportando a classe PessoaServices
