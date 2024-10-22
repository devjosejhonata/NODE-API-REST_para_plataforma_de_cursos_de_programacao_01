

Os modelos foram criados com o comando npx do sequelize, ex:

- npx sequelize-cli model:generate --name Pessoa --attributes nome:string,email:string,cpf:string,ativo:boolean,role:string

- O "--attributes seguido dos atributos", indica as informações que o modelo conterao, no caso do modelo pessoa será nome, email, cpf, ativo, role.

- Ao criar modelos, a escolha da forma de criação utilizando o sequelize-cli, se da pelo fato de o sequelize-cli poupar bastante tempo e trabalho ao automatizar a criação de modelos e migrações.