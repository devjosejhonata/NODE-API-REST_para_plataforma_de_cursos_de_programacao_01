/*
- Esse arquivo contém comandos para adicionar e remover a coluna 'deletedAt' na tabela 'pessoas' 
  para implementar a estratégia de soft delete, ou exclusão suave.
- A exclusão suave permite que registros sejam "marcados" como deletados sem serem removidos definitivamente do banco de dados.
*/

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adiciona a coluna 'deletedAt' à tabela 'pessoas'
    // 'deletedAt' armazena a data de exclusão suave do registro
    await queryInterface.addColumn('pessoas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE // Tipo de dados DATE para armazenar a data e hora da exclusão suave
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove a coluna 'deletedAt' da tabela 'pessoas', caso seja necessário reverter a migration
    await queryInterface.removeColumn('pessoas', 'deletedAt');
  }
};
