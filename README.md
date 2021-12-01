# Breakfast

#### O Breakfast é um projeto que tem o propósito de auxiliar na organização de um café da manhã em grupo com os colaboradores da empresa em que você trabalha.

-  **Neste repositório está contido apenas o Front End deste projeto, uma aplicação web básica com as operações CRUD.**


- **Você pode encontrar o repositório do Back End (REST API Feita em Java) acessando <a href="https://github.com/marcoswinicios/breakfast-api">Breakfast-api</a>**


- **Este projeto está hospedado no <a href="https://www.netlify.com/">Netlify</a>. Disponível no seguinte endereço: <a href="https://groupcoffee.netlify.app/">https://groupcoffee.netlify.app/</a>**
<br/>
- Ao acessar este endereço, é possível que haja uma breve demora para carregar os dados. Isso acontece pois o plano de hospedagem do Back End é gratuito, fazendo com que haja uma pequena demora ao acessar os dados pela primeira vez após algum intervalo   
---
## Funcionalidades
#### Dados cadastrados
- Cadastro de  Colaboradores
    - Nome do colaborador
    - CPF do colaborador
- Cadastro de itens para o café da manhã
    - Nome do item. Ex.: Pão, Bolo, etc.
#### Regras de negócio
- Não pode repetir cpf.
- Não pode repetir opção de café da manhã mesmo que seja outro colabor

## Tecnologias utilizadas 
- HTML5
- CSS3
- Typescript
- React JS V6
- React Router Dom
- React Icons
- Yarn
- Visual Studio Code
---
## Testando a Aplicação localmente
#### Ferramentas que você deve instalar em seu computador

**Obs.:** Deixei apenas o link do site oficial de cada ferramenta para que você possa seguir o passo a passo de instalação em seu sistema operacional

- <a href="https://git-scm.com/">Git</a>
- <a href="https://nodejs.org/en/">Node & NPM</a>
- <a href="https://maven.apache.org/">YARN (Caso queira utilizar o YARN ao invés do NPM)</a>

---
#### Passo a passo para executar o projeto

##### 1. Clonando repositório
Com o Git instalado, abra o terminal em uma diretório de sua escolha e execute o seguinte comando:
```
git clone https://github.com/MarcosWinicios/breakfast-web.git
```
##### 2. Executando o projeto 
2.1 Abra o terminal no diretório raiz do projeto e execute o seguintes comandos


- Instalando as dependências do projeto
```
    yarn install
```
- Executando o projeto
```
    yarn start
```
Se você quiser utilizar o NPM ao invés do Yarn, basta substituir a palavra `yarn` por `npm` nos comandos anteriores.

2.2 Abra o seguinte endereço no navegador: http://localhost:3000
