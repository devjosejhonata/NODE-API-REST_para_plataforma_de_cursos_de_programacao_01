/*
- Nesse arquivo contera os dados de exemplo para a tabela Pessoa e serão inseridos no banco de dados.
*/

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     // Inserção de dados na tabela pessoas
     // O método queryInterface.bulkInsert() é utilizado para inserir dados em massa na tabela pessoas
     await queryInterface.bulkInsert('pessoas', //
      [
        {
          nome: 'Solange Estudante',
          email: 'solange@email.com',
          cpf: '63058133022',
          ativo: true,
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Igor Estudante',
          email: 'igor@email.com',
          cpf: '99018205028',
          ativo: true,
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Aline Estudante',
          email: 'aline@email.com',
          cpf: '92797497066',
          ativo: true,
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Fernando Estudante',
          email: 'fernando@email.com',
          cpf: '17195730000',
          ativo: true,
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Ricardo Docente',
          email: 'ricardo@email.com',
          cpf: '06946507061',
          ativo: true,
          role: 'docente',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Dine Docente',
          email: 'dine@email.com',
          cpf: '80941142078',
          ativo: true,
          role: 'docente',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]      
      , {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('pessoas', null, {});// Remove todos os registros da tabela pessoas
     
  }
};
