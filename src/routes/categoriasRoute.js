/*
- Este arquivo contém as rotas para a entidade Categoria.
- As rotas são responsáveis por operações CRUD relacionadas às categorias.
*/

const { Router } = require('express'); // Importando Router do express

const CategoriaController = require('../controllers/CategoriaController.js'); // Importando o controller da entidade Categoria

const categoriaController = new CategoriaController(); // Criando uma instância do controller CategoriaController

const router = Router(); // Criando uma instância do Router

// Definindo a rota GET para listar todas as categorias
router.get('/categorias', (req, res) => categoriaController.pegaTodos(req, res));

// Rota para buscar uma categoria específica pelo ID
router.get('/categorias/:id', (req, res) => categoriaController.pegaUmPorId(req, res));

// Rota para criar uma nova categoria
router.post('/categorias', (req, res) => categoriaController.criaNovo(req, res));

// Rota para atualizar um registro de categoria existente
router.put('/categorias/:id', (req, res) => categoriaController.atualiza(req, res));

// Rota para excluir um registro de categoria
router.delete('/categorias/:id', (req, res) => categoriaController.exclui(req, res));

module.exports = router; // Exportando o router para ser usado em outras partes da aplicação
