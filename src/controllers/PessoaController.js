/*
- Este arquivo define a classe PessoaController, responsável por gerenciar as operações relacionadas à entidade Pessoa.
- O controller interage com os serviços (PessoaServices) para realizar operações de busca, criação, atualização, etc.
*/

const Controller = require('./Controller.js'); // Importando a classe base Controller
const PessoaServices = require('../services/PessoaServices.js'); // Importando o serviço específico para Pessoa

const pessoaServices = new PessoaServices(); // Criando uma instância do serviço de Pessoa

class PessoaController extends Controller {

    // O construtor chama a classe pai (Controller) passando o serviço específico de Pessoa
    constructor() {
        super(pessoaServices);
    }

    async pegaMatriculas(req, res) {
        // Extrai o ID do estudante a partir dos parâmetros da rota
        const { estudanteId } = req.params;
        
        try {
          // Chama o serviço para obter todas as matrículas do estudante com o ID fornecido
          const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(Number(estudanteId));

          return res.status(200).json(listaMatriculas); // Retorna a lista de matrículas como JSON

        } catch (erro) {
            
          // Envia uma resposta de erro caso algo dê errado
          return res.status(500).json({ erro: 'Erro ao buscar matrículas' });
        }
    }

    async pegaTodasAsPessoas(req, res) {
      try {
        const listaTodasAsPessoas = await pessoaServices.pegaPessoasEscopoTodos();
        return res.status(200).json(listaTodasAsPessoas);
      } catch (erro) {
        return res.status(500).json({ erro: erro.message });
      }
    }
    
}

module.exports = PessoaController; // Exportando a classe PessoaController
