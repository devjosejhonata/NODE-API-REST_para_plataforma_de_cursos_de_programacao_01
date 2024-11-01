/*
- Este arquivo define a classe MatriculaController, responsável por gerenciar as operações relacionadas à entidade Matricula.
- O controller interage com os serviços (MatriculaServices) para realizar operações de busca, criação, atualização, etc.
*/

const Controller = require('./Controller.js'); // Importando a classe base Controller
const MatriculaServices = require('../services/MatriculaServices.js'); // Importando o serviço específico para Matricula

const matriculaServices = new MatriculaServices(); // Criando uma instância do serviço de Matricula

class MatriculaController extends Controller {

    // O construtor chama a classe pai (Controller) passando o serviço específico de Matricula
    constructor() {
        super(matriculaServices);
    }    

    // Método para contar cursos por ID do estudante
    async contaCursosPorEstudante(req, res) {
        const { estudante_id } = req.params; // Obtém o ID do estudante da requisição

        try {
            const { total, cursos } = await this.entidadeService.obterQuantidadeECursosPorEstudante(estudante_id);
            const dadosEstudante = await this.entidadeService.pegaUmRegistro({ id: estudante_id });

            if (!dadosEstudante) {
                return res.status(404).json({ mensagem: 'Estudante não encontrado' });
            }

            // Retorna a contagem de matrículas, a lista de cursos e os dados do estudante
            return res.status(200).json({ QuantidadeDeMatriculas: total, cursos, estudante: dadosEstudante });
        } catch {
            return res.status(500).json({ mensagem: 'Erro ao buscar dados' });
        }
    }
}

module.exports = MatriculaController; // Exportando a classe MatriculaController
