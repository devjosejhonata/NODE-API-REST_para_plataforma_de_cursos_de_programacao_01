/*
- Neste arquivo estão as rotas para a entidade Pessoa.
- As rotas são responsáveis por mapear URLs para operações, como criação, leitura, atualização e deleção de registros de pessoas.
- As rotas foram listadas na ordem, para nao haver conflito entre elas.
*/

const { Router } = require('express'); // Importando Router do express

const PessoaController = require('../controllers/PessoaController.js'); // Importando o controller da entidade Pessoa
const MatriculaController = require('../controllers/MatriculaController.js'); // Importando o controller da entidade Matricula para operações relacionadas a matrículas

const pessoaController = new PessoaController(); // Criando uma instância do controller PessoaController
const matriculaController = new MatriculaController(); // Criando uma instância do controller MatriculaController

const router = Router(); // Criando uma instância do Router

// Definindo a rota GET para listar todas as pessoas
router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));

// Rota para buscar todas as pessoas, inclusive as inativas
router.get('/pessoas/todos', (req, res) => pessoaController.pegaTodasAsPessoas(req, res));

// Rota para buscar uma pessoa específica pelo ID
router.get('/pessoas/:id', (req, res) => pessoaController.pegaUmPorId(req, res));

// Rota para criar uma nova pessoa
router.post('/pessoas', (req, res) => pessoaController.criaNovo(req, res));

// Rota para atualizar um registro de pessoa existente
router.put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res));

// Rotas para atualizar o status de um estudante (ativo/inativo) na tabela pessoas
router.put('/pessoas/:estudante_id/status', (req, res) => pessoaController.alternarStatusEstudante(req, res));
router.delete('/pessoas/:estudante_id/status', (req, res) => pessoaController.alternarStatusEstudante(req, res));

// Rotas para reativar ou cancelar uma matrícula específica na tabela matriculas
router.patch('/pessoas/:estudante_id/matriculas/status', (req, res) => pessoaController.alternarStatusMatricula(req, res));
router.delete('/pessoas/:estudante_id/matriculas/status', (req, res) => pessoaController.alternarStatusMatricula(req, res));

// Rota para excluir um registro de pessoa
router.delete('/pessoas/:id', (req, res) => pessoaController.exclui(req, res));

// Rota para contar cursos por ID do estudante
router.get('/pessoas/:estudante_id/matriculas/quantidade', (req, res) => matriculaController.contaCursosPorEstudante(req, res));

// Rota para buscar todas as matrículas de um estudante específico pelo ID
router.get('/pessoas/:estudante_id/matriculas', (req, res) => pessoaController.pegaMatriculasAtivas(req, res));

//Rota para buscar todas as matriculas, etatus matriculado e cancelado
router.get('/pessoas/:estudante_id/matriculas/todos', (req, res) => pessoaController.pegaTodasAsMatriculas(req, res));

//Rota para buscar uma matricula pelo ID
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.pegaUm(req, res));

// Rota para criar uma nova matrícula para uma pessoa específica identificada pelo estudanteId
router.post('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.criaNovo(req, res));

// Rota para atualizar uma matrícula existente de um estudante específico pelo ID
router.put('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.atualiza(req, res));

// Rota para excluir uma matrícula de um estudante específico pelo ID
router.delete('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.exclui(req, res));

module.exports = router; // Exportando o router para ser usado em outras partes da aplicação
