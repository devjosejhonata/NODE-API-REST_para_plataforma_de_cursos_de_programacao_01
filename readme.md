: API Rest em Node.js com Sequelize, SQLite e Express :

- O projeto consiste em um sitema de plataforma para cursos de programação. A API conterá recursos para pessoas, sendo alunos e professores; cursos; matriculas; categorias.

- Este projeto foi desenvolvido com o objetivo de aprimorar habilidades no desenvolvimento de APIs, utilizando o ORM Sequelize para integrar e manipular bancos de dados SQL. O banco de dados escolhido para este projeto é o SQLite.

- Tecnologias utilizadas: Node.js para o desenvolvimento do servidor e da API; ORM Sequelize utilizado para facilitar a interação com o banco de dados SQL; SQLite, banco de dados leve e simples, ideal para pequenos projetos e testes locais.

- Objetivos do projeto: Praticar a criação e desenvolvimento de APIs RESTful; Explorar a utilização do Sequelize como ORM para abstrair as operações SQL; Integrar e manipular dados de um banco de dados SQLite;

- Justificativa para a escolha do Sequelize: O Sequelize foi escolhido por ser amplamente utilizado no ecossistema Node.js, oferecendo um suporte robusto a múltiplos bancos de dados SQL, como MySQL, PostgreSQL e SQLite. Sua documentação detalhada e facilidade de uso o tornam uma excelente ferramenta para projetos de qualquer escala. O uso do SQLite neste projeto facilita a configuração local e é ideal para fins de aprendizado e pequenos projetos.

- O projeto seguirá o padrão de arquitetura MVC (Model-View-Controller), para garantir uma organização clara e separação de responsabilidades no código.

- Nodemon instalado para rodar o projeto no automatico. Para executar o projeto: npm run dev.

- Versão do sequelize utilizado: npm install sequelize@6.32.1; Instalei também o: sequelize-cli@6.6.1 e o sqlite3@5.1.6 

- Comando utilizado para fazer as migrações dos dados para o banco: npx sequelize-cli db:migrate

- Para visualizar as tabelas do banco, tenho instalado no pc o DB Browser for SQLite e o Beekeeper Studio, e tambem a extensao no vscode SQLite Viewer.

## URLs testes

== Urls teste para buscar as pessoas: 

http://localhost:3000/pessoas

http://localhost:3000/pessoas/todos

http://localhost:3000/pessoas/1

== Url teste para buscar os cursos:

http://localhost:3000/cursos

http://localhost:3000/cursos/3

== Url teste para buscar matriculas de um estudante:

http://localhost:3000/pessoas/1/matriculas

http://localhost:3000/pessoas/1/matriculas/3

== Rota pra mudar o status de uma matricula para um estudante em um curso específico na tabela matricula, de cancelado para matriculado:

PATCH http://localhost:3000/pessoas/4/matriculas/status?curso_id=1

== Rota pra mudar o status de uma matricula para um estudante em um curso específico na tabela matricula, de matriculado pra cancelado:

DELETE http://localhost:3000/pessoas/4/matriculas/status?curso_id=3

== Rota pra mudar o status de um estudante, para ativo na tabela pessoas: 

PUT http://localhost:3000/pessoas/4/status

== Rota pra mudar o status de um estudante para desativado na tabela pessoas e cancelar todas as matriculas na tabela matriculas automaticamente: 

DELETE http://localhost:3000/pessoas/4/status

== Url para testar a contagem de cursos matriculados por estudante, retornando a quantidade e quais cursos: 

GET http://localhost:3000/pessoas/2/matriculas/quantidade

== Url para testar a busca por datas: 

Buscar por data específica: GET http://localhost:3000/cursos/data/2023-05-01

Buscar por intervalo de datas: GET http://localhost:3000/cursos/data/2023-01-01/2023-05-01
