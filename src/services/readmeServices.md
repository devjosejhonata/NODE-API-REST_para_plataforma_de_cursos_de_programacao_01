## Services

A pasta services intermediará a comunicação entre os controladores e os modelos da aplicação. Essa camada intermediária, chamada de services (serviços), é responsável por aplicar as regras de negócio necessárias e realizar a interação com os modelos, garantindo uma organização modular e clara.

## Estrutura e Funcionalidade

A camada de serviços abstrai a lógica de manipulação dos dados, separando-a das rotas e controladores. Dessa forma, o controlador não precisa lidar diretamente com os modelos, facilitando a aplicação de regras de negócio e a manutenção do código.

## Arquivos 

- Service.js: Define uma classe genérica de serviço que implementa métodos comuns, como pegaTodosOsRegistros, pegaUmRegistroPorId, criaRegistro, atualizaRegistro, e excluiRegistro. Essa classe genérica é utilizada como base para os serviços de diferentes entidades, centralizando a lógica comum de manipulação de dados e garantindo a consistência das operações CRUD.

- PessoaServices.js: Extende a classe Service.js e é responsável por gerenciar as operações relacionadas à entidade Pessoa. Herda métodos genéricos de Service.js e pode ser estendida para incluir regras de negócio específicas para pessoas.

## Observações

Cada serviço deve ser responsável por uma entidade da aplicação, centralizando as regras de negócio e as operações relacionadas a essa entidade.

A utilização de uma classe genérica (Service.js) permite que serviços compartilhem lógica comum, facilitando a criação e manutenção de novos serviços no futuro.