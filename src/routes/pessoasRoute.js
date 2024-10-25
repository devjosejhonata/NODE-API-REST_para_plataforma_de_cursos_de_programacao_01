/*
- Neste arquivo estão as rotas para a entidade Pessoa.
- As rotas são responsáveis por mapear URLs para operações, como criação, leitura, atualização e deleção de registros de pessoas.
*/

const { Router } = require('express'); // Importando Router do express

const PessoaController = require('../controllers/PessoaController.js'); // Importando o controller da entidade Pessoa

const pessoaController = new PessoaController(); // Criando uma instância do controller PessoaController

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

module.exports = router; // Exportando o router para ser usado em outras partes da aplicação
