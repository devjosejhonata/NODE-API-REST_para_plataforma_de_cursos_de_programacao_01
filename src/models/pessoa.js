/*
- Nesse arquivo contera a definição do modelo de dados da tabela Pessoa.
- O modelo de dados é uma classe que representa a tabela Pessoa no banco de dados.
- Dentro do modelo vamos especificar o que vamos fazer e lidar com todos os dados que iremos manipular.
*/


'use strict'; // Adicionado para garantir que o código seja executado em modo estrito

// Importação do módulo Model do sequelize para a criação de um modelo de dados
// Importação do módulo DataTypes do sequelize para a definição dos tipos de dados que serão utilizados no modelo
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      // define association here
      Pessoa.hasMany(models.Curso, {
        foreignKey: 'docente_id'
      });
      Pessoa.hasMany(models.Matricula, {
          foreignKey: 'estudante_id'
      });
    }
  }
  // Definição do modelo de dados da tabela Pessoa
  Pessoa.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',

    // Adicionado para referenciar a tabela pessoas no banco de dados 
    // o nome 'pessoas' segue o padrao de nomeclatura do mysql, com o nome em plural e em minusculo
    tableName: 'pessoas',
  });
  return Pessoa;
};