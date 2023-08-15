# Static Data

Exponha os dados da sua aplicação SPA para os motores de busca, sem necessidade de refatoração.

### Por Quê?

O Google não precisa acessar a mesma aplicação que o usuário usa. Enquanto uma aplicação SPA oferece a melhor experiência para o usuário, páginas com dados estáticos são melhores para mecanismos de busca e não precisam de toda a complexidade de uma SPA.

### Como Funciona?

- Esta ferramenta gera um "front-end" apenas com dados estáticos para serem encontrados pelos mecanismos de busca.

- Quando o usuário acessa uma página estática, é redirecionado para a página correspondente na SPA.

- Esta ferramenta é executada no backend, para que as páginas estáticas estejam sempre atualizadas. Portanto, pode ser utilizada em conjunto com qualquer framework front-end.

## Tutorial

Informe os dados de acordo com o seguinte modelo:

```Javascript
{
    path: 'path da página estática (nome da pasta)',
    redirectPath: 'página da aplicação SPA/{{id}}', // {{id}} identificador do item na URL da SPA
    itens: [
        {
            id: '1',
            title: 'Título da página do item',
            description: 'Descrição geral do item',

            // Objeto contendo informações separadas do item
            infos: {porp1: 'prop1', porp2: 'prop2', ...etc}
        }
    ]
}
```

### Configurações

```Javascript
staticDataConfigs.baseDir = 'diretório base onde as páginas estáticas serão geradas'

staticDataConfigs.baseRedirectUrl = 'URL base da aplicação SPA'
```

### Como Executar

```Javascript
// Simplesmente execute essa função passando os dados da página
processPage(page)
```
