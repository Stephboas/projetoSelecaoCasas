import { embaralharPerguntas } from "./utils.mjs";

let perguntaAtual; // Variável que armazena a pergunta atual
let perguntaIndex = 0; // Índice da pergunta atual
let perguntas;
let pontos = { corvinal: 0, sonserina: 0, lufalufa: 0, grifinoria: 0 }; // Objeto para armazenar pontos das casas

async function carregarPerguntas() {
    try {
        const response = await fetch('src/questions.json');
        const perguntas = await response.json();
        const perguntasEmbaralhadas = embaralharPerguntas(perguntas);
        console.log(perguntasEmbaralhadas);
        return perguntasEmbaralhadas; // Retorna o array de perguntas
    } catch (error) {
        console.error('Erro ao carregar as perguntas:', error);
        return [];
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    perguntas = await carregarPerguntas(); // Carrega as perguntas e atribui à variável global perguntas

    // Verificar se há perguntas carregadas
    if (perguntas.length > 0) {
        console.log('Perguntas carregadas:', perguntas);
        mostrarPergunta(perguntas[perguntaIndex]); // Mostrar a primeira pergunta
    } else {
        console.error('Nenhuma pergunta encontrada no arquivo JSON.');
    }
    
    const proximoBtn = document.getElementById('proximo-btn');
    proximoBtn.addEventListener('click', () => {
        // Lógica para avançar para a próxima pergunta
    });
});

function mostrarPergunta(pergunta) {
    perguntaAtual = pergunta; // Armazenar a pergunta atual
    const perguntaTexto = document.getElementById('pergunta-texto');
    const opcoesResposta = document.getElementById('opcoes-resposta');

    perguntaTexto.textContent = pergunta.question;

    // Limpar as opções de resposta antes de adicionar novas
    opcoesResposta.innerHTML = '';

    // Adicionar opções de resposta na página
    pergunta.options.forEach((opcao, index) => {
        const opcaoBtn = document.createElement('button');
        opcaoBtn.className = 'opcao-btn';
        opcaoBtn.textContent = opcao.text;

        // Adicione a propriedade font-family ao elemento do botão da opção de resposta
        opcaoBtn.style.fontFamily = "'Cinzel', Arial, serif";

        // Adicionar evento de clique para a opção de resposta
        opcaoBtn.addEventListener('click', () => selecionarResposta(opcaoBtn, opcao, index));

        opcoesResposta.appendChild(opcaoBtn);
    });
}

function selecionarResposta(opcaoBtn, opcao, index) {
    // Remover a classe 'opcao-selecionada' de todas as opções
    const todasOpcoes = document.querySelectorAll('.opcao-btn');
    todasOpcoes.forEach(opcao => {
        opcao.classList.remove('selected');
    });
    
    // Adicionar a classe 'opcao-selecionada' à opção de resposta clicada
    opcaoBtn.classList.add('selected');

    // Lógica para calcular pontos e atualizar o objeto 'pontos'
    const pontosOpcao = opcao.points;
    pontos.corvinal += pontosOpcao.corvinal || 0;
    pontos.sonserina += pontosOpcao.sonserina || 0;
    pontos.lufalufa += pontosOpcao.lufalufa || 0;
    pontos.grifinoria += pontosOpcao.grifinoria || 0;

    habilitarProximaPergunta(); 

    }


function habilitarProximaPergunta() {
    const proximoBtn = document.getElementById('proximo-btn');
    proximoBtn.disabled = false; // Habilitar o botão "Próxima"
}

// Inicialização: Carregar perguntas e mostrar a primeira pergunta
carregarPerguntas().then((perguntas) => {
    // Verificar se há perguntas carregadas
    if (perguntas.length > 0) {
        mostrarPergunta(perguntas[perguntaIndex]); // Mostrar a primeira pergunta
    } else {
        console.error('Nenhuma pergunta encontrada no arquivo JSON.');
    }
});

// Adicione um event listener ao botão "Próxima"
const proximoBtn = document.getElementById('proximo-btn');
proximoBtn.addEventListener('click', () => {
    const opcoesSelecionadas = document.querySelectorAll('.opcao-btn.selected');

    if (opcoesSelecionadas.length > 0) {
        // Processar os pontos das respostas selecionadas aqui, se necessário

        // Avança para a próxima pergunta
        perguntaIndex++;
        if (perguntaIndex < perguntas.length) {
            mostrarPergunta(perguntas[perguntaIndex]); // Mostrar a próxima pergunta
        } else {
            console.log('Fim das perguntas.'); // Todas as perguntas foram respondidas
            console.log('Pontos:', pontos); // Mostrar os pontos acumulados

            redirecionarParaPaginaDaCasa();
        }

        // Remover a classe 'selected' de todas as opções de resposta ao avançar para a próxima pergunta
        const todasOpcoes = document.querySelectorAll('.opcao-btn');
        todasOpcoes.forEach(opcao => {
            opcao.classList.remove('selected');
        });
    } else {
        // Exibe uma mensagem para o usuário selecionar uma resposta antes de avançar
        alert('Por favor, selecione uma resposta antes de avançar para a próxima pergunta.');
    }
});

export function determinarCasaSelecionada() {
    // Garante que todas as pontuações sejam números
    pontos = {
        grifinoria: pontos.grifinoria,
        sonserina: pontos.sonserina,
        lufalufa: pontos.lufalufa,
        corvinal: pontos.corvinal
    }

    // Determina qual casa foi selecionada com base nos pontos acumulados
    const casaSelecionada = Object.keys(pontos).reduce((a, b) => (pontos[a] > pontos[b] ? a : b));
    return casaSelecionada;
}

function redirecionarParaPaginaDaCasa() {
    // Determina a casa selecionada
    const casaSelecionada = determinarCasaSelecionada();
    
    // Redireciona o usuário para a página da casa correspondente
    window.location = `${casaSelecionada}.html`;
}
