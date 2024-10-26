/*
- Esse arquivo define a migration para criação da tabela "matriculas" no banco de dados.
- Migration permite gerenciar a estrutura da tabela no banco de dados de forma versionada.
*/

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Criação da tabela matriculas com campos especificados
    await queryInterface.createTable('matriculas', {
      //os nomes das tabelas sao diferentes dos nomes dos modelos
      //entao como parametro de create table, será passado o nome da tabela.
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      estudante_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'pessoas', key: 'id' }
      },
      curso_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: 'cursos', key: 'id' }
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
  // Remoção da tabela matriculas caso necessário
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('matriculas');
  }
};
