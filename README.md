<p align="center">
  <img src="https://i.imgur.com/6gW0XRO.png"/>
</p>

Tabela de conteúdos
=================
<!--ts-->
  - [Tabela de conteúdos](#tabela-de-conteúdos)
  - [Sobre](#sobre)
  - [Pré-requisitos](#pré-requisitos)
  - [Backend](#backend)
  - [Iniciando](#iniciando)
  - [Tecnologias](#tecnologias)
<!--te-->

## Sobre

Este site foi desenvolvido durante a [NLW#05](http://nextlevelweek.com/) o mesmo tem como o objetivo organizar as suas plantas em um unico lugar e ajudar a te lembrar quando deve molhar as mesmas.


## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e caso queria indico a utilziação do [Yarn](https://yarnpkg.com/), [Expo-Cli](https://docs.expo.io/workflow/expo-cli/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## Backend

Este projeto roda em um backend fictício então antes de iniciar o projeto no seu pc é necessário criar um deploy no heroku para que o seu server possa rodar, clicando no botão abaixo este processo será feito automaticamente.

<p align="center">
  <a href="https://heroku.com/deploy?template=https://github.com/ylyra/nwl5api">
    <img src="https://camo.githubusercontent.com/83b0e95b38892b49184e07ad572c94c8038323fb/68747470733a2f2f7777772e6865726f6b7563646e2e636f6d2f6465706c6f792f627574746f6e2e737667"/>
  </a>
</p>

## Iniciando
```bash
# Clone este repositório
git clone <https://github.com/ylyra/plantmanager>

# Acesse a pasta do projeto no terminal/cmd
cd plantmanager

# Instale as dependências
npm install
# caso tenha instaldo o yarn rode o comando abaixo
yarn

# Execute a aplicação em modo de desenvolvimento
npm run start
# ou
yarn start


# Em src/services/api.ts troque a baseURL pela sua url da api gerada pelo heroku
```

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Expo](https://docs.expo.io/)
- [React](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/)
- [date-fns](https://date-fns.org/)
- [LottieFiles](https://lottiefiles.com/)
- [expo-google-fonts](https://github.com/expo/google-fonts/)
- [expo-vector-icons](https://docs.expo.io/guides/icons/)
- [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage/)
- [expo-notifications](https://docs.expo.io/versions/latest/sdk/notifications/)
- [TypeScript](https://www.typescriptlang.org/)