/*
- Esse arquivo contém comandos para adicionar e remover a coluna 'deletedAt' na tabela 'categorias' 
  para implementar a estratégia de soft delete.
- A coluna 'deletedAt' possibilita a exclusão suave, onde registros podem ser marcados como excluídos 
  sem serem removidos definitivamente.
*/

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adiciona a coluna 'deletedAt' na tabela 'categorias' para registrar exclusões suaves
    await queryInterface.addColumn('categorias', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE // Tipo DATE para armazenar a data de exclusão
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove a coluna 'deletedAt' da tabela 'categorias', se for necessário reverter a migration
    await queryInterface.removeColumn('categorias', 'deletedAt');
  }
};
