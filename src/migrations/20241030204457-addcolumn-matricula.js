/*
- Esse arquivo contém comandos para adicionar e remover a coluna 'deletedAt' na tabela 'matriculas' 
  para implementar a exclusão suave, também chamada de soft delete.
- O soft delete utiliza a coluna 'deletedAt' para marcar registros como excluídos sem removê-los do banco.
*/

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adiciona a coluna 'deletedAt' na tabela 'matriculas' para registrar exclusões suaves
    await queryInterface.addColumn('matriculas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE // Tipo DATE para registrar a data e hora da exclusão suave
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove a coluna 'deletedAt' da tabela 'matriculas' caso a migration precise ser revertida
    await queryInterface.removeColumn('matriculas', 'deletedAt');
  }
};
