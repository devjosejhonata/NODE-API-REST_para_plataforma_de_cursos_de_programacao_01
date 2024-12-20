/*
- Neste arquivo conterá a definição da migração para a criação da tabela Pessoa.
- A migração é um arquivo que contém instruções para a criação de uma tabela no banco de dados.
*/


'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pessoas', {
      //os nomes das tabelas sao diferentes dos nomes dos modelos
      //entao como parametro de create table, será passado o nome da tabela.
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      ativo: {
        type: Sequelize.BOOLEAN
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  // Remoção da tabela pessoas caso necessário
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pessoas');
  }
};