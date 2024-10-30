/*
- Esse arquivo contera comandos para dicionar e remover colunas no banco de dados para refletir 
a estragegia de soft delete, apagar dados sem apagar definitivamente.
- tabela cursos
*/


'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('cursos',  'deletedAt', {
      
      allowNull: true,
      type: Sequelize.DATE

    });
  },

  
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('cursos', 'deletedAt');
  }
};