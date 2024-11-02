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

      // Método para retornar todas as pessoas ativas com paginação
      async pegaPessoasAtivas(req, res) {
        const page = Math.max(parseInt(req.query.page) || 1, 1);   // Define a página atual, garantindo que seja pelo menos 1
        const limit = Math.max(parseInt(req.query.limit) || 2, 1);   // Define o limite de resultados por página, garantindo que seja pelo menos 1

        try {
            // Chama o serviço para obter as pessoas ativas com a paginação definida
            const { pessoas, totalPaginas, totalPessoas } = await pessoaServices.pegaPessoasAtivasPaginado(page, limit);
            // Retorna a resposta com os dados das pessoas
            res.status(200).json({ pessoas, paginaAtual: page, totalPaginas, totalPessoas });
        } catch (erro) {
            res.status(erro.message === 'Página não encontrada' ? 404 : 500).json({ erro: erro.message });
        }
      }

      // Método para retornar todas as pessoas (ativas e inativas) com paginação
      async pegaTodasAsPessoas(req, res) {
        const page = Math.max(parseInt(req.query.page) || 1, 1);  // Define a página atual, garantindo que seja pelo menos 1
        const limit = Math.max(parseInt(req.query.limit) || 2, 1);  // Define o limite de resultados por página, garantindo que seja pelo menos 1

        try {
            // Chama o serviço para obter todas as pessoas com a paginação definida
            const { pessoas, totalPaginas, totalPessoas } = await pessoaServices.pegaTodasAsPessoasPaginado(page, limit);
            // Retorna a resposta com os dados das pessoas
            res.status(200).json({ pessoas, paginaAtual: page, totalPaginas, totalPessoas });
        } catch (erro) {
            res.status(erro.message === 'Página não encontrada' ? 404 : 500).json({ erro: erro.message });
        }
      }

      async pegaMatriculasAtivas(req, res) {
          // Extrai o ID do estudante a partir dos parâmetros da rota
          const { estudante_id } = req.params;
          
          try {
            // Chama o serviço para obter as matrículas Ativas
            const listaMatriculas = await pessoaServices.pegaMatriculasAtivasPorEstudante(Number(estudante_id));

            return res.status(200).json(listaMatriculas); // Retorna a lista de matrículas como JSON

          } catch (erro) {
            return res.status(500).json({ erro: 'Erro ao buscar matrículas' });
          }
      }

      async pegaTodasAsMatriculas(req, res) {
        // Extrai o ID do estudante a partir dos parâmetros da rota
        const { estudante_id } = req.params;
        
        try {
          // Chama o serviço para obter todas as matrículas dos estudantes
          const listaMatriculas = await pessoaServices.pegaTodasAsMatriculasPorEstudante(Number(estudante_id));

          return res.status(200).json(listaMatriculas); // Retorna a lista de matrículas como JSON

        } catch (erro) {
             return res.status(500).json({ erro: 'Erro ao buscar matrículas' });
        }
    }


    // Metodo que alterna o status do estudante entre ativo e inativo 
    // Com base no método HTTP (PUT para ativar, DELETE para desativar)
    async alternarStatusEstudante(req, res) {
      const { estudante_id } = req.params;
      const status = req.method === 'PUT'; // Define true para ativar (PUT), false para desativar (DELETE)

      try {
          // Atualiza o campo 'ativo' do estudante com base no status definido
          await pessoaServices.atualizaRegistro({ ativo: status }, { id: estudante_id });
          
          // Se status é false (DELETE), atualiza também o status das matrículas para 'cancelado'
          if (!status) {
              await pessoaServices.atualizaStatusMatriculas(estudante_id, 'cancelado');
          }

          // Retorna a resposta de sucesso com mensagem baseada no status
          return res.status(200).json({ message: `Estudante ${status ? 'ativado' : 'desativado'} com sucesso.` });
      } catch (erro) {
          return res.status(500).json({ erro: `Erro ao ${status ? 'ativar' : 'desativar'} estudante` });
      }
    }

    // Metodo que alterna o status da matrícula entre 'matriculado' e 'cancelado'
    // Com base no método HTTP (PATCH para reativar, DELETE para desativar)
    async alternarStatusMatricula(req, res) {
      const { estudante_id } = req.params;
      const { curso_id } = req.query;
      const status = req.method === 'PATCH' ? 'matriculado' : 'cancelado'; // Define o status da matrícula com base no método HTTP

      try {
          // Atualiza o status da matrícula do estudante para o curso especificado
          await pessoaServices.atualizaStatusMatriculas(estudante_id, status, curso_id);

          // Retorna a resposta de sucesso com mensagem baseada no status da matrícula
          return res.status(200).json({ message: `Matrícula ${status === 'matriculado' ? 'reativada' : 'desativada'} com sucesso.` });
      } catch (erro) {
          return res.status(500).json({ erro: `Erro ao ${status === 'matriculado' ? 'reativar' : 'desativar'} matrícula` });
      }
    }

}

module.exports = PessoaController; // Exportando a classe PessoaController
