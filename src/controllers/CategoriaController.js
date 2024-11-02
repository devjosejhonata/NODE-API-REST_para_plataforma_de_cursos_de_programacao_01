/*
- Este arquivo define a classe CategoriaController, responsável por gerenciar as operações relacionadas à entidade Categoria.
- O controller interage com os serviços (CategoriaServices) para realizar operações de busca, criação, atualização, etc.
*/

const Controller = require('./Controller.js'); // Importando a classe base Controller
const CategoriaServices = require('../services/CategoriaServices.js'); // Importando o serviço específico para Categoria

const categoriaServices = new CategoriaServices(); // Criando uma instância do serviço de Categoria

class CategoriaController extends Controller {

    // O construtor chama a classe pai (Controller) passando o serviço específico de Categoria
    constructor() {
        super(categoriaServices);
    }

    // Método para buscar todas as categorias
    async pegaTodos(req, res) {
        try {
            const categorias = await categoriaServices.model.findAll(); // Busca todas as categorias
            return res.status(200).json(categorias); // Retorna as categorias encontradas
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro ao buscar categorias', erro: error.message });
        }
    }

}

module.exports = CategoriaController; // Exportando a classe CategoriaController
