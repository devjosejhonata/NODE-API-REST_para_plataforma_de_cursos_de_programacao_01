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

    // Método para buscar todos os cursos com paginação
    async pegaTodos(req, res) {
        const page = Math.max(parseInt(req.query.page) || 1, 1); // Define a página mínima como 1
        const limit = Math.max(parseInt(req.query.limit) || 2, 1); // Define o limite mínimo como 1

        try {
            const { cursos, totalPaginas, totalCursos } = await cursoServices.pegaTodosPaginado(page, limit); // Chama o novo método de serviços
            return res.status(200).json({ cursos, paginaAtual: page, totalPaginas, totalCursos }); // Retorna os cursos encontrados com dados de paginação
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao buscar cursos', erro: error.message });
        }
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
