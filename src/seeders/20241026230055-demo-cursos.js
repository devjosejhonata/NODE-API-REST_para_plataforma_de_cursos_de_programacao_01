/* 
 - Arquivo de seed para popular a tabela `cursos` com dados iniciais.
 - Este arquivo é usado para inserir dados padrão na tabela.
 - A tabela `cursos` contém informações sobre os cursos oferecidos.
 - Este arquivo inclui um método `up` para inserir dados e um método `down` para removê-los.
*/

'use strict'; // Modo estrito para evitar erros comuns no código

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Inserindo registros iniciais na tabela `cursos`
    await queryInterface.bulkInsert('cursos', [
      // O método queryInterface.bulkInsert() é utilizado para inserir dados em massa na tabela `cursos`
      {
        titulo: 'API com Express', // Nome do curso
        descricao: 'Curso de API com Express e MongoDB', // Descrição do curso
        data_inicio: '2023-01-01', // Data de início do curso
        categoria_id: 1, // ID da categoria relacionada
        docente_id: 5, // ID do docente responsável
        createdAt: new Date(), // Data de criação do registro
        updatedAt: new Date(), // Data de atualização do registro
      },
      {
        titulo: 'SpringBoot',
        descricao: 'Curso de Java com Spring Framework',
        data_inicio: '2023-01-01',
        categoria_id: 2,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Python Web com Django',
        descricao: 'Curso de aplicações web com Django',
        data_inicio: '2023-01-01',
        categoria_id: 3,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Orientação a Objetos com C#',
        descricao: 'Curso de C#: coleções, arquivos e libs',
        data_inicio: '2023-01-01',
        categoria_id: 4,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}); // Objeto vazio para opções adicionais
  },

  async down (queryInterface, Sequelize) {
    // Removendo registros da tabela `cursos` caso necessario
    await queryInterface.bulkDelete('cursos', null, {}); 
  }
};
