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

#### O público alvo são dois: 
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

### 📌 Orientações
---
### 📎 Pré-requisitos:
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/victoriardspaiva/On14-TodasEmTech-s11-Revisao-API>

# Acesse a pasta do projeto no terminal/cmd
$ cd On14-TodasEmTech-s11-Revisao-API/para_o_lar

# Instale as dependências
$ npm install

# Execute o servidor
$ npm start

# O servidor inciará na porta:7050 - acesse <http://localhost:7050>
```
#### 🚀  Rotas, links e métodos
---

A ferramenta de suporte de criação das requisição usada foi o [Postman](https://www.postman.com/), você pode usar a de sua preferência.


- Listar todos os estabelicimentos:<br />
GET 🗂️ <http://localhost:7050/estabelecimento/todos>

- Listar estabelicimentos por id:<br />
GET 📂 <http://localhost:7050/estabelecimento/:id>

- Criar um cadastro para o estabelicimento:<br />
POST 📋 <http://localhost:7050/estabelecimento/criar>

- Dar like ou deslike em um estabelicmento:<br />
PATCH 👍 <http://localhost:7050/estabelecimento/likes/:id/?><br />
Obs.: Há duas query params, um para o like e outro para deslike. Assim, com a mesma rota é possível realizar as duas funções.

### Rotas, links e métodos
- [x] Listar todas os hosts disponiveis;
- [x] Listar hosts por filtros: nome, bairro, cidade, disponibilidade para acolhimento;
- [x] Cadastrar hosts;
- [x] Atualizar dados cadastrais do hosts;
- [x] Deletar um host.

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



