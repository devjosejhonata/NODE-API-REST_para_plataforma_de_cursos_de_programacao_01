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
    
}

module.exports = MatriculaController; // Exportando a classe MatriculaController
