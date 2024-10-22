A pasta src conterá todos os arquivos de código-fonte principais do projeto. Isso inclui módulos, classes, funções e outros componentes necessários para a implementação da lógica do aplicativo. A estrutura da pasta src é organizada de forma a facilitar a manutenção e a escalabilidade do código.

- Dentro do SRC, alguns arquivos bases do projeto foram criados com o comando "npx sequelize-cli init" , do sequelize. Foi criado na pasta raiz do projeto, e esses arquivos apos criados foram movidos para a pasta SRC. Após isso eu criei um arquivo na pasta raiz do projeto chamado .sequelizerc , dentro desse arquivo irei informar ao sequelize cli o caminho dos arquivos criados com o npx. Arquivos criados com o npx e informados no .sequelizerc: config, migrations, models e seeders. 

- dentro da pasta config, em config.json, eu informei o caminho do arquivo de banco de dados, database.sqlite, que se encontra na raiz do projeto.

- Inicialmente não será preciso alterar o arquivo index.js dentro de models.

