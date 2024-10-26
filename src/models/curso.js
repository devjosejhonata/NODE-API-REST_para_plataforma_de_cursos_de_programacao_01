/*
- Nesse arquivo contera a definição do modelo de dados da tabela Curso.
- O modelo de dados é uma classe que representa a tabela Curso no banco de dados.
- Dentro do modelo vamos especificar o que vamos fazer e lidar com todos os dados que iremos manipular.
*/

'use strict'; // Adicionado para garantir que o código seja executado em modo estrito

// Importação do módulo Model do sequelize para a criação de um modelo de dados
// Importação do módulo DataTypes do sequelize para a definição dos tipos de dados que serão utilizados no modelo
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      // Definindo a associação com outros modelos
      Curso.belongsTo(models.Categoria, {
        foreignKey: 'categoria_id'
      });
      Curso.belongsTo(models.Pessoa, {
          foreignKey: 'docente_id'
      });
      Curso.hasMany(models.Matricula, {
          foreignKey: 'curso_id'
      });
    }
  }

  // Definição do modelo de dados da tabela Curso
  Curso.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Curso',

    // Adicionado para referenciar a tabela cursos no banco de dados 
    // o nome 'cursos' segue o padrao de nomeclatura do mysql, com o nome em plural e em minusculo
    tableName: 'cursos',
  });
  return Curso;
};
