# MagicWorld House Selection

Bem-vindo ao MagicWorld House Selection! Este projeto é uma aplicação web que permite aos usuários fazer um quiz mágico e serem selecionados para uma das quatro casas de Hogwarts do universo de Harry Potter.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **`selecaoCasas`**: Diretório principal do projeto.
  - **`public`**: Contém HTML, CSS e recursos de imagem para a interface do usuário.
  - **`src`**: Contém arquivos de código JavaScript.
  - **`server.mjs`**: Script no lado do servidor para lidar com solicitações.
  - **`webpack.config.cjs`**: Arquivo de configuração do Webpack.
  - **`package.json`**: Configuração do projeto e dependências.

## Principais Funcionalidades

1. **Interação do Quiz (casas.mjs):** O script lida com as interações do usuário durante o quiz, mostrando e ocultando dicas de descrição de personagens ao passar o mouse.

2. **Menu Responsivo (index.mjs):** O projeto inclui um menu lateral responsivo que pode ser ativado clicando em um ícone de hambúrguer.

3. **Lógica do Quiz (quiz.mjs):** Gerencia o fluxo do quiz, carregando perguntas de um arquivo JSON, calculando pontos com base nas respostas do usuário e determinando a casa de Hogwarts no final.

4. **Funções Utilitárias (utils.mjs):** Inclui funções utilitárias para embaralhar arrays, usadas no quiz para randomizar a ordem das perguntas.

## Início Rápido

1. Clone o repositório:

   ```bash
   git clone https://github.com/your-username/MagicWorld.git


 ```bash
  cd MagicWorld/selecaoCasas

 ```bash
  npm install

 ```bash
  npm start

Abra seu navegador e vá para http://localhost:3000 para acessar a aplicação.

Dependências:
- Webpack: Usado para agrupar e gerenciar ativos do projeto.
- Babel: Compilador JavaScript para garantir compatibilidade em diferentes ambientes.
- jQuery: Usado para manipulação simplificada do DOM.

Sinta-se à vontade para explorar o código e vivenciar a magia do processo de seleção das casas de Hogwarts!

## Desafios e Aprendizados

Durante o desenvolvimento deste projeto, enfrenteis alguns desafios que contribuíram significativamente para o aprimoramento das minhas habilidades em programação. Alguns dos principais desafios incluíram:

- **Integração Assíncrona:** Lidar com carregamento assíncrono de perguntas do arquivo JSON e garantir que o quiz aguarde a conclusão desse processo.

- **Lógica de Pontuação Dinâmica:** Desenvolver uma lógica robusta para calcular pontos com base nas respostas do usuário e atribuir esses pontos às casas de Hogwarts de maneira dinâmica.

- **Responsividade e Interatividade:** Implementar um menu lateral responsivo e interativo, proporcionando uma experiência agradável ao usuário em diferentes dispositivos.

- **Pure JavaScript:** Manter o foco em JavaScript puro, sem depender excessivamente de bibliotecas ou frameworks, para aprimorar a compreensão e a habilidade em programação.

- **Interatividade:** Uma característica única deste projeto é a interatividade proporcionada pela animação do Chapéu Seletor. Desenvolvi e projetei essa animação para envolver os usuários de uma maneira ainda mais mágica durante o teste. 

  - **Animação do Chapéu Seletor:** O Chapéu Seletor reage às respostas do usuário, proporcionando uma experiência imersiva e personalizada. Sinta-se à vontade para observar essa interação especial enquanto o Chapéu Seletor guia os usuários pela jornada de seleção das casas de Hogwarts.


## Próximos Passos

Este projeto é uma demonstração inicial de minhas habilidades e paixão por desenvolvimento web. Para futuras iterações, alguns aprimoramentos poderiam incluir:

- **Melhorias no Design:** Implementar melhorias visuais e de design para aprimorar a experiência do usuário.

- **Expansão do Conteúdo:** Adicionar mais perguntas e opções de resposta para tornar o quiz mais envolvente.

- **Localização e Internacionalização:** Incorporar suporte para diferentes idiomas e regiões, tornando o projeto mais acessível globalmente.

## Contribuições

Contribuições são bem-vindas! Se você tem sugestões, correções ou deseja adicionar novos recursos, sinta-se à vontade para criar um pull request ou abrir uma issue.

Agradeço por explorar o projeto MagicWorld House Selection e espero que aproveite a jornada mágica de seleção das casas de Hogwarts!
