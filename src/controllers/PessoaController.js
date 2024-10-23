/*
- Dentro desse arquivo conterá o controller que será responsável por gerenciar as 
operações relacionadas à entidade Pessoa, como buscar todas as pessoas.
*/

// Executando todo o código dentro de models/index.js
const database = require('../models');

class PessoaController {
  // Método estático para pegar todas as pessoas
  static async pegaTodas(req, res) {
    try {

        // Buscando todas as pessoas no banco de dados
        const listaDePessoas = await database.Pessoa.findAll();

        // Retornando a lista de pessoas com status 200 (OK)
        return res.status(200).json(listaDePessoas);
        
    } catch (error) {
        
        // Retornando uma mensagem de erro com status 500 (Erro interno do servidor)
        return res.status(500).json({ mensagem: 'Erro ao buscar dados' });
    }
  }
}

module.exports = PessoaController;
