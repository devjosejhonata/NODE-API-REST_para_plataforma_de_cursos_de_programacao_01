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
    
}

module.exports = PessoaServices; // Exportando a classe PessoaServices
