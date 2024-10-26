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
    await queryInterface.bulkInsert('matriculas', [
      // O método queryInterface.bulkInsert() é utilizado para inserir dados em massa na tabela `matriculas`
      {
        estudante_id: 1, // ID do estudante matriculado
        curso_id: 1, // ID do curso em que o estudante está matriculado
        status: 'matriculado', // Status da matrícula
        createdAt: new Date(), // Data de criação do registro
        updatedAt: new Date(), // Data de atualização do registro
      },
      {
        estudante_id: 2,
        curso_id: 2,
        status: 'matriculado',
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
    ], {}); // Objeto vazio para opções adicionais
  },

  async down (queryInterface, Sequelize) {
    // Removendo registros da tabela `matriculas` caso necessario
    await queryInterface.bulkDelete('matriculas', null, {}); 
  }
};
