/*
- Nesse arquivo contera a definição do modelo de dados da tabela Matricula.
- O modelo de dados é uma classe que representa a tabela Matricula no banco de dados.
- Dentro do modelo vamos especificar o que vamos fazer e lidar com todos os dados que iremos manipular.
*/

'use strict'; // Adicionado para garantir que o código seja executado em modo estrito

// Importação do módulo Model do sequelize para a criação de um modelo de dados
// Importação do módulo DataTypes do sequelize para a definição dos tipos de dados que serão utilizados no modelo
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      // Definindo a associação com outros modelos, se necessário
    }
  }

  // Definição do modelo de dados da tabela Matricula
  Matricula.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matricula',

    // Adicionado para referenciar a tabela matriculas no banco de dados 
    // o nome 'matriculas' segue o padrao de nomeclatura do mysql, com o nome em plural e em minusculo
    tableName: 'matriculas',
  });
  return Matricula;
};
