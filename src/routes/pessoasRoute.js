/*
- Nesse arquivo conterá as rotas para a entidade Pessoa.
- As rotas definidas aqui serão utilizadas para realizar operações como criar, ler, atualizar e deletar pessoas.
*/

const { Router } = require('express'); // Importando Router do express

const PessoaController = require('../controllers/PessoaController'); // Importando o controller da entidade Pessoa

const router = Router(); // Criando uma instância do Router

// Definindo a rota GET para buscar todas as pessoas
router.get('/pessoas', PessoaController.pegaTodas); // Chamando o método que pega todas as pessoas

module.exports = router; // Exportando o router para ser usado em outras partes da aplicação
