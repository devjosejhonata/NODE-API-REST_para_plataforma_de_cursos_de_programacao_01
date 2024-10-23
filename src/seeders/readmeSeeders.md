Dentro desse arquivo contem os dados testes da pasta arquivos-base, que estao sendo populados no banco.

- criei o arquivo seeder com o comando: 

: npx sequelize-cli seed:generate --name + seguido do nome do arquivo

- Comando para rodar os arquivos seed: 

: npx sequelize-cli db:seed:all , no caso para todos os arquivos.

: após executar esse comando, os dados inseridos nos arquivos seed seram inseridos no banco.