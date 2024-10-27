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
    
}

module.exports = CursoController; // Exportando a classe CursoController
