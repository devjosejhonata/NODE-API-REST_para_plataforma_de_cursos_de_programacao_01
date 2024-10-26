

Os modelos foram criados com o comando npx do sequelize, ex:

- Modelo pessoa: npx sequelize-cli model:generate --name Pessoa --attributes nome:string,email:string,cpf:string,ativo:boolean,role:string

- Modelo categoria: npx sequelize-cli model:generate --name Categoria --attributes titulo:string

- Modelo curso: npx sequelize-cli model:generate --name Curso --attributes titulo:string,descricao:string,data_inicio:dateonly

- Modelo matricula: npx sequelize-cli model:generate --name Matricula --attributes status:string

- O "--attributes seguido dos atributos", indica as informações que o modelo conterao, no caso do modelo pessoa será nome, email, cpf, ativo, role. Categoria vai conter id, titulo. Cursos vai ter id, titulo, descricao, data_inicio, categoria_id, docente_id. Matriculas vai ter id, estudante_id, curso_id, status.

- Ao criar o modelos, criei cada modelo por ordem, e, também passei nos comandos somente os atributos naturais de cada tabela, os outros atributos virá das outras entidades, ex categoria_id da tabela cursos virá da tabela categoria.

- Ao criar modelos, a escolha da forma de criação utilizando o sequelize-cli, se da pelo fato de o sequelize-cli poupar bastante tempo e trabalho ao automatizar a criação de modelos e migrações.

- ao criar o modelo utilizando o comando do sequelize no terminal, sera gerado o arquivo de modelo na pasta models e um arquivo dentro da pasta migrations. 