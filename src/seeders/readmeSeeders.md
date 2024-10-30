Dentro desse arquivo contem os dados testes da pasta arquivos-base, que estao sendo populados no banco.

- criei o arquivo seeder com o comando: 

: npx sequelize-cli seed:generate --name + seguido do nome do arquivo
: todos os arquivos seeders foram criados na ordem tambem, primeiro pessoa, depois categoria, cursos e matriculas. A ordem é importante pelo mesmo motivo das migrações — quando executarmos esses seeds, as consultas devem ser realizadas na ordem correta no banco. Isso porque não conseguimos criar registros se o registro associado ainda não existe no banco.

- Comando para rodar, migrar os arquivos, dados seed para o banco: 

: npx sequelize-cli db:seed:all , no caso para todos os arquivos.

Se ja existir um arquivo seeder e eu criar outro arquivo, outro comando sera utilizado para nao haver duplicação nos dados. cada arquivo de uma vez.

: npx sequelize-cli db:seed --seed 20241026230020-demo-categorias.js //exemplo

: após executar esse comando, os dados inseridos nos arquivos seed seram inseridos no banco.