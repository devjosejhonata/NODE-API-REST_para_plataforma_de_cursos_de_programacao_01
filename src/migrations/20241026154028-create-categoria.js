/*
- Esse arquivo define a migration para criação da tabela "categorias" no banco de dados.
- Migration permite gerenciar a estrutura da tabela no banco de dados de forma versionada.
*/

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Criação da tabela categorias com campos especificados
    await queryInterface.createTable('categorias', {
      //os nomes das tabelas sao diferentes dos nomes dos modelos
      //entao como parametro de create table, será passado o nome da tabela.
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
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
  // Remoção da tabela categorias caso necessário
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('categorias');
  }
};
