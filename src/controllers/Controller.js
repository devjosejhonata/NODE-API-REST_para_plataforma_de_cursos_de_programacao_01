/*
- Este arquivo define a classe base Controller, que será utilizada por outras classes de controller para operações genéricas.
- Ele contém métodos comuns que serão compartilhados entre diferentes entidades.
*/

class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService; // Inicializa o serviço específico da entidade (ex: PessoaServices)
    }

    // Método para buscar todos os registros da entidade
    async pegaTodos(req, res) {
        try {
            // Chama o serviço da entidade para obter todos os registros
            const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistros); // Retorna os registros em formato JSON com status 200 (sucesso)
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao buscar dados' }); // Retorna um erro 500 em caso de falha
        }
    }
}

module.exports = Controller; // Exportando a classe Controller
