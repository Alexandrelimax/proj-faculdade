# Sistema de Login e Mudança de Tema em Angular

Este projeto Angular implementa um sistema de login básico com funcionalidade de mudança de tema. A aplicação inclui um formulário de login, autenticação via `HttpClient` com dados mockados no arquivo `db/db.json`, e uma funcionalidade de mudança de tema.

## Componentes Principais

### LoginComponent

O `LoginComponent` é responsável pelo formulário de login. Após a validação dos dados, utiliza o `AuthService` para armazenar o token no `localStorage` e notifica outros componentes sobre a autenticação bem-sucedida usando um `BehaviorSubject`.

### HomeComponent

O `HomeComponent` é a página principal após o login, exibindo as boas-vindas ao usuário. Utiliza o `AuthService` para obter os dados do usuário e repassa esses dados para componentes filhos, como o `PerfilComponent`.

### PerfilComponent

O `PerfilComponent` é um componente filho do `HomeComponent`. Ele recebe os dados do usuário e o modo de tema como entrada e exibe esses dados em seu template. Contém um botão que aciona um método para alterar o tema, enviando um evento para o `HomeComponent`.

## Diretiva de Mudança de Tema (ngThemeMode)

A `ngThemeMode` é uma diretiva que altera o tema da página com base em um valor booleano fornecido como entrada. Essa diretiva é aplicada no `div` principal do `HomeComponent`.

## Serviço de Autenticação (AuthService)

O `AuthService` gerencia a autenticação do usuário, armazenando o token no `localStorage` e notificando outros componentes por meio de um `BehaviorSubject` quando a autenticação é bem-sucedida.

## Fluxo de Mudança de Tema

1. O botão no `PerfilComponent` é clicado, acionando o método `buttonTheme()`.
2. O método `buttonTheme()` emite um evento para o `HomeComponent` por meio do `EventEmitter`.
3. O `HomeComponent` captura o evento e altera o valor do atributo `theme`.
4. A mudança no valor de `theme` é refletida na diretiva `ngThemeMode`, alterando o tema da página.
