/*
- Esse arquivo contém comandos para adicionar e remover a coluna 'deletedAt' na tabela 'cursos' 
  para implementar a estratégia de exclusão suave.
- A exclusão suave armazena a data de exclusão sem remover os dados definitivamente, o que permite reversão futura.
*/

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adiciona a coluna 'deletedAt' na tabela 'cursos' para registrar exclusões suaves
    await queryInterface.addColumn('cursos', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE // Tipo DATE para registrar a data e hora da exclusão suave
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove a coluna 'deletedAt' da tabela 'cursos' caso a migration precise ser revertida
    await queryInterface.removeColumn('cursos', 'deletedAt');
  }
};
