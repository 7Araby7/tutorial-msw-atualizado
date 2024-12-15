# Criando um projeto com Vite para dar continuidade às aulas.

Este tutorial ensina como criar um projeto React utilizando o Vite, configurando as ferramentas essenciais como ESLint e Prettier, além de atualizar as funções do MSW para dar continuidade ao curso sem maiores dores de cabeça.

> **Nota:** Este tutorial foi criado com o intuito de apresentar uma forma mais moderna de iniciar os projetos React, utilizando o Vite. O **create-react-app** é uma ferramenta amplamente utilizada, mas, com o passar dos anos, tornou-se uma alternativa mais antiga, com algumas limitações em termos de performance e flexibilidade. O Vite, por outro lado, oferece um setup mais rápido e eficiente, com um tempo de inicialização significativamente menor e uma experiência de desenvolvimento mais fluida. Além disso, algumas funcionalidades no **MSW (Mock Service Worker)** foram atualizadas e mudaram ao longo do tempo, impossibilitando-nos de seguir as aulas do curso. Por isso, este tutorial também inclui essas atualizações, garantindo que você esteja utilizando as versões mais recentes dessas ferramentas. Com isso, você terá um ambiente de desenvolvimento mais moderno e otimizado para trabalhar.

---

## Passo a Passo

### 1. Criar o Projeto

Execute o comando abaixo para iniciar a criação do projeto:

```bash
npm create vite@latest
```

1. Digite o nome do projeto.
2. Escolha `React` como framework.
3. Escolha `JavaScript + SWC` como a variante.

> **Nota:** SWC (Speedy Web Compiler) é um compilador escrito em Rust, projetado para ser extremamente rápido e eficiente. Ele substitui ferramentas tradicionais como Babel, acelerando a construção e transpilação do código JavaScript.

---

### 2. Acesse o Diretório do Projeto

```bash
cd {nome-do-projeto}
```

---

### 3. Configurar os Arquivos

Cole os arquivos abaixo no diretório do projeto, substituindo os que já existem:

- `package.json`
- `vite.config.js`
- `eslint.config.js`
- `.prettierrc`
- `.editorconfig`

[Disponíveis aqui](https://github.com/7Araby7/tutorial-msw-atualizado/tree/main/config)

---

### 4. Instalar as Dependências

Após substituir os arquivos, execute o comando abaixo:

```bash
npm install
```

---

### 5. Substituir a Pasta `src`

- Apague a pasta `src` gerada e cole a sua pasta `src` do seu projeto das aulas.
- Substitua o arquivo `index.js` do seu `src` pelo arquivo [main.jsx](https://github.com/7Araby7/tutorial-msw-atualizado/blob/main/arquivosSrc/main.jsx).
- Adicione o arquivo [Home.spec.jsx](https://github.com/7Araby7/tutorial-msw-atualizado/blob/main/arquivosSrc/Home.spec.jsx) substituindo o seu `templates\home\Home.spec.jsx` (se o seu código estiver igual ao do professor).
- Cole o arquivo [setupTests.js](https://github.com/7Araby7/tutorial-msw-atualizado/blob/main/arquivosSrc/setupTests.js) dentro do seu `src`.

---

### 6. Formatar o código com o `ESLint`

Para não dar nenhum erro com o ESLint, rode o comando:

```bash
npm run lint
```

> Se você ainda não configurou para corrigir o código ao salvar (o professor já ensinou na aula) e quiser configurar, cole o seguinte código no seu settings.json no VSCode:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": "explicit",
  "source.fixAll": "explicit"
},
```

---

## Comparação de Comandos

Antes, no `create-react-app`, os comandos eram os seguintes:

| Comando Antigo           | Comando Novo (Vite) |
| ------------------------ | ------------------- |
| `npm start`              | `npm run dev`       |
| `npm run build`          | `npm run build`     |
| `npm test`               | `npm run test`      |
| `npm test -- --coverage` | `npm run coverage`  |
| `npx eslint . --fix `    | `npm run lint`      |

---

## Ordem e Organização dos Repositórios

A estrutura do repositório ao final ficará assim:

```
/{nome-do-projeto}
  ├── /node_modules
  ├── /public
  ├── /src
  │    └── setupTest.js
  │    └── main.jsx
  │    └── /templates
  │        └── /home
  │            └── Home.spec.jsx
  ├── .editorconfig
  ├── .prettierrc
  ├── .eslintrc.js
  ├── package.json
  ├── vite.config.js
  └── README.md
```

O repositório conterá a estrutura padrão de um projeto Vite com React, incluindo os arquivos de configuração do ESLint, Prettier e o Vite.

---

## Resumo das Dependências

| Pacote    | Versão  |
| --------- | ------- |
| React     | ^18.3.1 |
| React-DOM | ^18.3.1 |
| Vite      | ^6.0.1  |
| ESLint    | ^9.15.0 |
| Prettier  | ^3.4.2  |
| Vitest    | ^2.0.5  |

> O Vitest está substituindo o Jest.

---

## Pronto!

Agora você tem um projeto React com Vite configurado com ESLint e Prettier. Para iniciar o servidor de desenvolvimento, use:

```bash
npm run dev
```

Ou para iniciar o servidor de teste, use:

```bash
npm run test
```

Ou se quiser testar com o coverage, use:

```bash
npm run coverage
```

---

## Documentação Adicional
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [MSW (Mock Service Worker)](https://mswjs.io/)

> Se eu te ajudei, considere dar uma estrela no repositório, compartilhar com outros que possam se beneficiar ou contribuir com melhorias. Se tiver dúvidas ou sugestões, fique à vontade para abrir uma issue ou enviar um pull request. Toda colaboração é bem-vinda! E, se quiser acompanhar meus próximos projetos, não deixe de me seguir no GitHub =)

