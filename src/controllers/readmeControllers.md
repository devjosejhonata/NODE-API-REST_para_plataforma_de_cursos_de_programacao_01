# Controllers

A pasta controllers contém todos os arquivos que gerenciam a lógica de negócios da aplicação. Cada controlador é responsável por receber as requisições dos clientes, processar os dados necessários e retornar as respostas apropriadas. Os controladores interagem diretamente com as rotas e realizam operações comuns, como CRUD (Create, Read, Update, Delete), ao interagir com os serviços (services) da aplicação.

## Estrutura e Funcionalidade

Os controladores são a camada intermediária entre as rotas e os serviços, garantindo que a lógica de manipulação de dados esteja separada da definição das rotas. Essa separação facilita a manutenção e a escalabilidade da aplicação.

### Arquivos

- Controller.js: Define um controlador genérico que fornece métodos comuns, como pegaTodos, pegaUmPorId, criaNovo, atualiza, e exclui. Esses métodos são base para a implementação de operações CRUD (Create, Read, Update, Delete) em outras classes de controladores específicos, como PessoaController. Este arquivo serve como uma estrutura padronizada, garantindo consistência e reutilização de código entre diferentes controladores da aplicação.

- PessoaController.js: Gerencia as operações relacionadas à entidade Pessoa, como listar todas as pessoas, utilizando os métodos herdados de Controller.js e o serviço PessoaServices.js.

OS DEMAIS CONTROLLERS AINDA SERÃO CRIADOS: 

- **CursoController.js**: Responsável por manipular as operações referentes à entidade **Curso**, abrangendo a gestão de informações sobre os cursos disponíveis.
- **MatriculaController.js**: Controla as operações relacionadas à **Matricula**, permitindo o gerenciamento de inscrições de pessoas em cursos.
- **CategoriaController.js**: Administra as funcionalidades ligadas às **Categorias**, possibilitando a organização dos cursos em diferentes segmentos.

## Observações

- Os controladores devem seguir as boas práticas de codificação, incluindo tratamento de erros e validação de dados para garantir a robustez da aplicação.

- É recomendável adicionar comentários nos métodos dos controladores para explicar a lógica de cada operação, facilitando a compreensão para outros desenvolvedores.

Com essa estrutura bem definida, a manutenção e a evolução da aplicação se tornam mais eficientes e organizadas.
