# Routes

A pasta **routes** é responsável por definir as rotas da API, que determinam como os clientes interagem com os recursos da aplicação. Cada arquivo dentro desta pasta corresponde a um conjunto de rotas que lidam com funcionalidades específicas, permitindo organizar as requisições de maneira clara e modular.

## Estrutura e Funcionalidade

As rotas atuam como um ponto de entrada para as operações da aplicação, conectando as requisições HTTP aos controladores correspondentes. Isso facilita a manutenção e a escalabilidade do código, permitindo que novas funcionalidades sejam adicionadas sem comprometer a estrutura existente.

### Arquivos

- **index.js**: Serve como o ponto de acesso principal para todas as rotas da aplicação. Ele é responsável por agrupar e configurar as rotas de maneira centralizada, facilitando a inicialização da API.
- **pessoasRoute.js**: Define as rotas relacionadas à entidade **Pessoa**, incluindo operações como listagem, criação, atualização e exclusão de registros de pessoas.

AS DEMAIS ROTAS AINDA SERÃO CRIADAS: 

- **cursoRoute.js**: Contém as rotas associadas à entidade **Curso**, gerenciando as interações dos usuários com os cursos disponíveis.
- **matriculaRoute.js**: Responsável por definir as rotas para gerenciar as **Matrículas**, permitindo que usuários se inscrevam em cursos.
- **categoriaRoute.js**: Abrange as rotas ligadas às **Categorias**, possibilitando a organização e a consulta de cursos em diferentes segmentos.

## Observações

- As rotas devem seguir boas práticas, como a validação de dados e o tratamento de erros, garantindo uma comunicação eficaz e confiável entre o cliente e o servidor.
- É recomendável manter a documentação das rotas atualizada, incluindo detalhes sobre os parâmetros aceitos e as respostas esperadas, para facilitar a compreensão e o uso da API por outros desenvolvedores.

Com uma estrutura de rotas bem definida, a aplicação se torna mais organizada e de fácil manutenção, permitindo a adição de novas funcionalidades de forma eficiente.
