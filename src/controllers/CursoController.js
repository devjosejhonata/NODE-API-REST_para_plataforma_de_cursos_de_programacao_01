/*
- Este arquivo define a classe CursoController, responsável por gerenciar as operações relacionadas à entidade Curso.
- O controller interage com os serviços (CursoServices) para realizar operações de busca, criação, atualização, etc.
*/

const Controller = require('./Controller.js'); // Importando a classe base Controller
const CursoServices = require('../services/CursoServices.js'); // Importando o serviço específico para Curso

const cursoServices = new CursoServices(); // Criando uma instância do serviço de Curso

class CursoController extends Controller {

    // O construtor chama a classe pai (Controller) passando o serviço específico de Curso
    constructor() {
        super(cursoServices);
    }

    // Método unificado para buscar cursos por data ou intervalo de datas
    async pegaPorDataOuIntervalo(req, res) {
        const { dataInicio, dataFim } = req.params; // Obtendo as datas a partir dos parâmetros da requisição

        try {
            // Usando o método unificado no cursoServices para data ou intervalo de datas
            const cursos = await cursoServices.pegaPorDataOuIntervalo(dataInicio, dataFim);

            if (cursos.length === 0) {
                return res.status(404).json({ mensagem: 'Nenhum curso encontrado para a(s) data(s) fornecida(s).' });
            }
            return res.status(200).json(cursos); // Retorna os cursos encontrados
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao buscar dados', erro: error.message });
        }
    }
    
}

module.exports = CursoController; // Exportando a classe CursoController
