/* 
 - Arquivo de seed para popular a tabela `matriculas` com dados iniciais.
 - Este arquivo é usado para inserir dados padrão na tabela.
 - A tabela `matriculas` contém informações sobre as matrículas dos estudantes em cursos. 
 - Este arquivo inclui um método `up` para inserir dados e um método `down` para removê-los.
*/

'use strict'; // Modo estrito para evitar erros comuns no código

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Inserindo registros iniciais na tabela `matriculas`
    // O método queryInterface.bulkInsert() é utilizado para inserir dados em massa na tabela `matriculas`
    await queryInterface.bulkInsert('matriculas', [
      {
        estudante_id: 1,
        curso_id: 1,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 1,
        curso_id: 2,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 1,
        curso_id: 5,
        status: 'cancelado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 2,
        curso_id: 7,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 2,
        curso_id: 8,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 2,
        curso_id: 3,
        status: 'cancelado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 3,
        curso_id: 3,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 4,
        curso_id: 4,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 4,
        curso_id: 5,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 5,
        curso_id: 3,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 5,
        curso_id: 4,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}); // Objeto vazio para opções adicionais
  },

  async down (queryInterface, Sequelize) {
    // Removendo registros da tabela `matriculas` caso necessario
    await queryInterface.bulkDelete('matriculas', null, {}); 
  }
};
