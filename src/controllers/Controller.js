/*
- Este arquivo define a classe base Controller, que será utilizada por outras classes de controller para operações genéricas.
- Ele contém métodos comuns que serão compartilhados entre diferentes entidades.
*/

const converteIds = require('../utils/conversorDeStringHelpers.js');

class Controller {

    // O construtor recebe um serviço específico da entidade e o armazena como uma propriedade
    constructor(entidadeService) {
        this.entidadeService = entidadeService; // Inicializa o serviço específico da entidade (ex: PessoaServices)
    }

    // Método para buscar um único registro por ID
    async pegaUmPorId(req, res) {
        const { id } = req.params; // Obtém o ID da requisição

        try {
            // Chama o serviço da entidade para buscar um registro pelo ID
            const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
            
            // Retorna o registro encontrado com status 200
            return res.status(200).json(umRegistro);
        } catch (erro) {
            // Retorna um erro 500 em caso de falha
            return res.status(500).json({ mensagem: 'Erro ao buscar dados' });
        }
    }

    //Metodo para buscar uma matricula pelo ID
    async pegaUm(req, res) {
        const { ...params } = req.params; // Obtém o ID da requisição

        const where = converteIds(params);

        try {
            
            const umRegistro = await this.entidadeService.pegaUmRegistro(where);
            
            // Retorna o registro encontrado com status 200
            return res.status(200).json(umRegistro);
        } catch (erro) {
            // Retorna um erro 500 em caso de falha
            return res.status(500).json({ mensagem: 'Erro ao buscar dados' });
        }
    }

    // Método para criar um novo registro
    async criaNovo(req, res) {
        const dadosParaCriacao = req.body; // Obtém os dados da requisição
        try {
            // Chama o serviço para criar um novo registro com os dados fornecidos
            const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
            
            // Retorna o registro recém-criado
            return res.status(200).json(novoRegistroCriado);
        } catch (erro) {
            // Retorna um erro 500 em caso de falha
            return res.status(500).json({ erro: erro.message });
        }
    }

    // Método para atualizar um registro existente
    async atualiza(req, res) {

        const { ...params } = req.params; // Obtém o params do registro a ser atualizado
        const dadosAtualizados = req.body; // Obtém os dados atualizados da requisição

        const where = converteIds(params);

        try {
            // Atualiza o registro usando o serviço da entidade
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, where);
            
            // Se não houver atualização, retorna uma mensagem de erro
            if (!foiAtualizado) {
                return res.status(400).json({ mensagem: 'registro não foi atualizado' });
            }

            // Retorna sucesso se o registro foi atualizado
            return res.status(200).json({ mensagem: 'Atualizado com sucesso' });

        } catch (erro) {
            // Retorna um erro 500 em caso de falha
            return res.status(500).json({ mensagem: 'Erro ao buscar dados' });
        }
    }

    // Método para excluir um registro
    async exclui(req, res) {

        const { id } = req.params; // Obtém o ID do registro a ser excluído

        try {
            // Chama o serviço da entidade para excluir o registro
            await this.entidadeService.excluiRegistro(Number(id));
            
            // Retorna uma mensagem de sucesso após a exclusão
            return res.status(200).json({ mensagem: `id ${id} deletado` });
            
        } catch (error) {
            // Retorna uma mensagem de erro caso ocorra uma falha
            return res.status(500).json(error.message);
        }
    }
}

module.exports = Controller; // Exportando a classe Controller
