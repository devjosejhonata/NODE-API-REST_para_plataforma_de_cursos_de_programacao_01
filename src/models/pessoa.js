/*
- Nesse arquivo contera a definição do modelo de dados da tabela Pessoa.
- O modelo de dados é uma classe que representa a tabela Pessoa no banco de dados.
- Dentro do modelo vamos especificar o que vamos fazer e lidar com todos os dados que iremos manipular.
*/


'use strict'; // Adicionado para garantir que o código seja executado em modo estrito

//importando o arquivo contendo a funçao que simula a validação de cpf;
const isCpfValido = require('../utils/validaCpfHelpers.js');

// Importação do módulo Model do sequelize para a criação de um modelo de dados
// Importação do módulo DataTypes do sequelize para a definição dos tipos de dados que serão utilizados no modelo
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      
        // Associação com o modelo Curso para representar cursos atribuídos a uma pessoa na função de docente
        Pessoa.hasMany(models.Curso, {
          foreignKey: 'docente_id'
        });

        // Associação com o modelo Matricula para representar as matrículas de uma pessoa na função de estudante
        // Adicionado escopo para filtrar registros de matrículas com status 'matriculado', e alias 'aulasMatriculadas'
        Pessoa.hasMany(models.Matricula, {
            foreignKey: 'estudante_id', 
            scope: { status: 'matriculado'}, 
            as: 'aulasMatriculadas'
        });

        //Escopo adicionado para filtrar todas as matriculas
        Pessoa.hasMany(models.Matricula, {
          foreignKey: 'estudante_id',
          as: 'todasAsMatriculas'
        });

    }
  }
  // Definição do modelo de dados da tabela Pessoa
  Pessoa.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30],
          msg: 'o campo nome deve ter no mínimo 3 caracteres'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
          isEmail: {
              args: true,
              msg: 'formato do email inválido'
          }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
          cpfEhValido: (cpf) => {
              if (!isCpfValido (cpf)) throw new Error('numero de CPF inválido');
          }
      }
  },
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',

    // Adicionado para referenciar a tabela pessoas no banco de dados 
    // o nome 'pessoas' segue o padrao de nomeclatura do mysql, com o nome em plural e em minusculo
    tableName: 'pessoas',

    //para trabalhar com soft delete
    paranoid:true,

    // Adicionado para definir um escopo padrão para as consultas
    // sera exibido apenas registros com o campo 'ativo' igual a true
    // No banco nao sera alterado nada com isso, someente vai ser exibido nas buscas os registros com ativo = true
    defaultScope: {
      where: {
        ativo: true
      }
    }, 

    //scopo para buscar todos os registros, inclusive os inativos
    scopes: {
      todosOsRegistros: {
        where: {}
      }
    }
  });
  return Pessoa;
};