# 🐕 🍬 Projeto Caramelo 🍬 🐕
Projeto final do bootcamp {reprograma} backend, criando CRUD de ONG's e abrigos de animais.

![assets/1.png](assets/1.png)


## 📑 Índice
---

   - [Problemática](#-arquitetura)
   - [Solução](#-arquitetura)
   - [Público alvo](#-arquitetura)
   - [Arquitetura](#-arquitetura)
   - [Tecnologias](#-tecnologias)
   - [Orientações](#-orientações)
      - [Pré-requisitos](#-pré-requisitos)
      - [Rodando o Back End (servidor)](#-rodando-o-back-end-servidor)
      - [Rotas, links e métodos](#--rotas-links-e-métodos)
   - [Implementações futuras](#-orientações)


### Problemática 😿
Grande número de animais abandonados na região metropolitana do Recife.

### Solução 🐶
Voltado para animais - gatos e cachororos - em situação de vunerabilidade na região metropolitana do Recife procurando uma lar temporário ou uma adoção responsável.
Terá uma base de dados de hosts que pode ser abrigos, ONGs ou pessoas que se disponibilizam para abrigar os animais até sua possivel adoção.

#### O público alvo: 
1) pessoas que encontram algum animal abandonado e gostariam entregar à uma local de acolhimento. 🏡
2) pessoas que buscam por locais que tenham pets disponiveis para adoção. 🐈

### 🧱 Arquitetura
---
```
├───📂para_o_lar/
    ├───📂assets/
    │   ├───1.png
    │   ├───2.png
    │   └───3.png
    ├───📂src/
    │   ├───📂controllers/
    │   │   └───estabelecimentoControllers.js
    │   ├───📂models/
    │   │   └───estabelecimentos.json
    │   ├───📂routers/
    │   │   └───estabelecimentoRouters.js
    │   └───app.js
    ├───.gitignore
    ├───Instrucoes.md
    ├───package-lock.json
    ├───package.json
    ├───readme.md
    └───server.js
```
### 💻 Tecnologias
---
As seguintes ferramentas foram usadas na construção do projeto:

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [Cors](https://www.typescriptlang.org/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Dotenv-safe](https://www.npmjs.com/package/dotenv-safe)

### 📌 Orientações
---
### 📎 Pré-requisitos:
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Para o banco de dados usaremos um não relacional (NoSQL) [MongoDB], se você quiser criar seu db na nuvem, deve criar uma conta no [Mongo Atlas](https://account.mongodb.com/), a partir disso é possivel da nuvem mesmo gerencia-lo ou também é possivel atráves do aplicativo desktop [MongoCompass](https://www.mongodb.com/products/compass).
#mais detalhes depois
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/victoriardspaiva/projetoLivre-Caramelo>

# Acesse a pasta do projeto no terminal/cmd
$ cd projetoLivre-Caramelo

# Instale as dependências
$ npm install ou npm i

# Execute o servidor
$ npm start

# O servidor inciará na porta:9090 - acesse <http://localhost:9090> #VARIAVEL DE AMBIENTE NO POSTMAN
```
#### 🚀  Rotas, links e métodos
---

A ferramenta de suporte de criação das requisição usada foi o [Postman](https://www.postman.com/), você pode usar a de sua preferência.

## Places:



- Página inicial:<br />
GET 🏚️ <http://localhost:9090/>

- Listar todas os hosts disponiveis:<br />
GET 🗂️ <http://localhost:9090/home/caramelo>

- Listar hosts por filtros:<br />
GET 🗃️ <http://localhost:9090/home/search>

   - ✔️ name
   - ✔️ id
   - ✔️ animal
   - ✔️ district
   - ✔️ host

<!-- # rotas privadas -->
- Criar um cadastro para o host:<br /> 
POST 📋 <http://localhost:9090/home/create>

- Atualizar dados cadastrais do host:<br />
PUT 📝 <http://localhost:9090/home/update><br />

- Deletar um host:<br />
DELETE 🗑️ <http://localhost:9090/home/delete><br />

## Usuários 

- Listar todos usuários:<br />
GET 🗂️ <http://localhost:9090/user/all>

- Listar usuário por id:<br />
GET 📂 <http://localhost:9090/user/id?>

- Registrar usuários:<br /> 
POST 📋 <http://localhost:9090/user/register>

- Login de usuário:<br /> 
POST ✅ <http://localhost:9090/user/login>

- Atualizar dados cadastrais do usuário:<br />
PUT 📝 <http://localhost:9090/user/update><br />

- Deletar um usuários:<br />
DELETE ❌ <http://localhost:9090/user/delete><br />

### Tratamento de mensagens de erro
- [] 422 Pesquisa não encontrada (dos filtros)
- [x] só para gatos e cachorros
- [] campo vazio
- [] letra mauiscula/minuscula 

### Implementações futuras
- [x] Login de usuario
* Exibir só host que tenham disponibilidade de vagas/ * Contagem de vagas nos abrigos 
* Filtro do user (quero adotar/ quero resgatar/ padrinho) 

* Lista de animais disponiveis
* Notificação de eventos e campanhas de adoção
* Veterinarios parceiros



