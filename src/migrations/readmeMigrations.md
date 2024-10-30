A migração é um arquivo que contém instruções para a criação de uma tabelas no banco de dados.

- Foi utilizado a estrategia de soft delete, pra apagar dados sem deletar definitivo no banco, exclusao suave. Com isso, foi adicionado uma coluna nas tabelas, com o nome deletedAt.

Comando utilizado para fazer as migrações para as tabelas no banco: 

npx sequelize-cli db:migrate