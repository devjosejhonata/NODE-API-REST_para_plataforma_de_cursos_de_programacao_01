/*
- Neste arquivo estão as rotas para a entidade Pessoa.
- As rotas são responsáveis por mapear URLs para operações, como criação, leitura, atualização e deleção de registros de pessoas.
*/

const { Router } = require('express'); // Importando Router do express

const PessoaController = require('../controllers/PessoaController.js'); // Importando o controller da entidade Pessoa
const MatriculaController = require('../controllers/MatriculaController.js'); // Importando o controller da entidade Matricula para operações relacionadas a matrículas

const pessoaController = new PessoaController(); // Criando uma instância do controller PessoaController
const matriculaController = new MatriculaController(); // Criando uma instância do controller MatriculaController

const router = Router(); // Criando uma instância do Router

// Definindo a rota GET para listar todas as pessoas
router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));

// Rota para buscar uma pessoa específica pelo ID
router.get('/pessoas/:id', (req, res) => pessoaController.pegaUmPorId(req, res));

// Rota para criar uma nova pessoa
router.post('/pessoas', (req, res) => pessoaController.criaNovo(req, res));

// Rota para atualizar um registro de pessoa existente
router.put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res));

// Rota para excluir um registro de pessoa
router.delete('/pessoas/:id', (req, res) => pessoaController.exclui(req, res));

// Rota para buscar todas as matrículas de um estudante específico pelo ID
router.get('/pessoas/:estudanteId/matriculas', (req, res) => pessoaController.pegaMatriculas(req, res));


// Rota para criar uma nova matrícula para uma pessoa específica identificada pelo estudanteId
router.post('/pessoas/:estudanteId/matriculas', (req, res) => matriculaController.criaNovo(req, res));

module.exports = router; // Exportando o router para ser usado em outras partes da aplicação
