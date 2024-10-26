/*
 - Arquivo de seed para popular a tabela `categorias` com dados iniciais.
 - Este arquivo é usado para inserir dados padrão na tabela.
 - A tabela `categorias` contém informações sobre as categorias disponíveis para os cursos. 
 - Este arquivo inclui um método `up` para inserir dados e um método `down` para removê-los.
*/

'use strict'; // Modo estrito para evitar erros comuns no código


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Inserindo registros iniciais na tabela `categorias`
    await queryInterface.bulkInsert('categorias', [
      // O método queryInterface.bulkInsert() é utilizado para inserir dados em massa na tabela `categorias`
      {
        titulo: 'Node.js', // Nome da categoria
        createdAt: new Date(), // Data de criação do registro
        updatedAt: new Date(), // Data de atualização do registro
      },
      {
        titulo: 'Java',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Python',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'C#',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}); // Objeto vazio para opções adicionais
  },

  async down (queryInterface, Sequelize) {
    // Removendo registros da tabela `categorias` caso necessario
    await queryInterface.bulkDelete('categorias', null, {}); 
  }
};
