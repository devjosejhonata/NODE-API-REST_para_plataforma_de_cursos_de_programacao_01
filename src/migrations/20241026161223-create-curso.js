/*
- Esse arquivo define a migration para criação da tabela "cursos" no banco de dados.
- Migration permite gerenciar a estrutura da tabela no banco de dados de forma versionada.
*/

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Criação da tabela cursos com campos especificados
    await queryInterface.createTable('cursos', {
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
      descricao: {
        type: Sequelize.STRING
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
      docente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'pessoas', key: 'id' }
      },
      categoria_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: 'categorias', key: 'id' }
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
  // Remoção da tabela cursos caso necessário
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cursos');
  }
};
