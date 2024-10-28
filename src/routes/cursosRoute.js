/*
- Este arquivo contém as rotas para a entidade Curso.
- As rotas são responsáveis por operações CRUD relacionadas aos cursos.
*/

const { Router } = require('express'); // Importando Router do express

const CursoController = require('../controllers/CursoController.js'); // Importando o controller da entidade Curso

const cursoController = new CursoController(); // Criando uma instância do controller CursoController

const router = Router(); // Criando uma instância do Router

// Definindo a rota GET para listar todos os cursos
router.get('/cursos', (req, res) => cursoController.pegaTodos(req, res));

// Rota para buscar um curso específico pelo ID
router.get('/cursos/:id', (req, res) => cursoController.pegaUmPorId(req, res));

// Rota para criar um novo curso
router.post('/cursos', (req, res) => cursoController.criaNovo(req, res));

// Rota para atualizar um registro de curso existente
router.put('/cursos/:id', (req, res) => cursoController.atualiza(req, res));

// Rota para excluir um registro de curso
router.delete('/cursos/:id', (req, res) => cursoController.exclui(req, res));

module.exports = router; // Exportando o router para ser usado em outras partes da aplicação
