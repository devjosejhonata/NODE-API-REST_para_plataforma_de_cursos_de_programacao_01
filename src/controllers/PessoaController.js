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
}

module.exports = PessoaController; // Exportando a classe PessoaController
