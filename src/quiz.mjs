import { embaralharPerguntas } from "./utils.mjs";

let perguntaAtual; // Variável que armazena a pergunta atual
let perguntaIndex = 0; // Índice da pergunta atual
let perguntas;
let pontos = { corvinal: 0, sonserina: 0, lufalufa: 0, grifinoria: 0 }; // Objeto para armazenar pontos das casas

async function carregarPerguntas() {
    try {
        const response = await fetch('src/questions.json');
        perguntas = await response.json();
        const perguntasEmbaralhadas = embaralharPerguntas(perguntas);
        mostrarPergunta(perguntasEmbaralhadas[perguntaIndex]); // Mostrar a primeira pergunta
    } catch (error) {
        console.error('Erro ao carregar as perguntas:', error);
    }
}

function calcularPontos(opcoesSelecionadas) {
    opcoesSelecionadas.forEach(opcaoBtn => {
        const index = Array.from(document.querySelectorAll('.opcao-btn')).indexOf(opcaoBtn);
        const opcao = perguntaAtual.options[index];
        const pontosOpcao = opcao.points;
        pontos.corvinal += pontosOpcao.corvinal || 0;
        pontos.sonserina += pontosOpcao.sonserina || 0;
        pontos.lufalufa += pontosOpcao.lufalufa || 0;
        pontos.grifinoria += pontosOpcao.grifinoria || 0;
    });
}

function verificarPontosCasa(opcoesSelecionadas, balaoFala) {
    calcularPontos(opcoesSelecionadas);

    const casas = {
        "grifinoria": {
            5: "Hummm, difícil, muito difícil...",
            10: "Hummm, acho que estou te entendendo melhor... Aaah sim, entendo, entendo...",
            20: "Humm, coragem... Você tem uma sede de se provar. Onde devo te colocar?",
            28: "Você possui uma coragem inabalável e um coração que anseia por aventuras!",
            35: "Você é verdadeiramente destemido, com certeza seu nome será de destaque na história!"
        },
        "sonserina": {
            5: "Hummm, difícil, muito difícil...",
            10: "Hummm, acho que estou te entendendo melhor... Aaah sim, entendo, entendo...",
            20: "Você possui uma ambição notável. Certo talento também. Onde devo te colocar?",
            28: "Sua astúcia e determinação são dignas de grandes homens que já passaram por aqui.",
            35: "Você tem um potencial tremendo. Ambição e inteligência em abundância! Grandes feitos você terá"
        },
        "corvinal": {
            5: "Hummm, difícil, muito difícil...",
            10: "Hummm, acho que estou te entendendo melhor... Aaah sim, entendo, entendo...",
            20: "Sua inteligência e criatividade são admiráveis. Sonserina...Talvez, talvez. Onde devo te colocar?",
            28: "Vejo que você valoriza muito sua inteligência e conhecimento.",
            35: "Você possui sabedoria e discernimento notáveis como muitos grandes sábios que já passaram por aqui"
        },
        "lufalufa": {
            5: "Hummm, difícil, muito difícil...",
            10: "Hummm, acho que estou te entendendo melhor... Aaah sim, entendo, entendo...",
            20: "Você possui um grande coração e paciência. Grandes virtudes. Onde devo te colocar?",
            28: "Sua lealdade e gentileza são características fundamentais de quem você é.",
            35: "Sua gentileza e compaixão são incomparáveis! Seu nome brilhará entre os grandes, eu vejo."
        }
    };

    const casaSelecionada = determinarCasaSelecionada(pontos);
    
    for (let pontuacao in casas[casaSelecionada]) {
        if (pontos[casaSelecionada] >= parseInt(pontuacao)) {
            balaoFala.textContent = casas[casaSelecionada][pontuacao];
        }
    }

    console.log('Mensagem: ', balaoFala.textContent);
    return balaoFala.textContent;
}

document.addEventListener('DOMContentLoaded', () => {
    carregarPerguntas();

    const proximoBtn = document.getElementById('proximo-btn');
    const balaoFala = document.getElementById('balao-fala'); // Adiciona a referência ao elemento balaoFala

    proximoBtn.addEventListener('click', () => {
        const opcoesSelecionadas = document.querySelectorAll('.opcao-btn.selected');

        if (opcoesSelecionadas.length > 0) {
            const mensagem = verificarPontosCasa(opcoesSelecionadas, balaoFala);
            balaoFala.textContent = mensagem;

            perguntaIndex++;

            if (perguntaIndex < perguntas.length) {
                mostrarPergunta(perguntas[perguntaIndex]); // Mostrar a próxima pergunta
            } else {
                console.log('Fim das perguntas.'); // Todas as perguntas foram respondidas
                console.log('Pontos:', pontos); // Mostrar os pontos acumulados

                // Redirecionar para a página da casa correspondente
                redirecionarParaPaginaDaCasa();
            }
        } else {
            // Exibe uma mensagem para o usuário selecionar uma resposta antes de avançar
            alert('Por favor, selecione uma resposta antes de avançar para a próxima pergunta.');
        }
    });
});

function selecionarResposta(opcaoBtn, opcao, index) {
    // Remover a classe 'opcao-selecionada' de todas as opções
    const todasOpcoes = document.querySelectorAll('.opcao-btn');
    todasOpcoes.forEach(opcao => {
        opcao.classList.remove('selected');
    });
    
    // Adicionar a classe 'selected' à opção de resposta clicada
    opcaoBtn.classList.add('selected');
    
    habilitarProximaPergunta();
}

function mostrarPergunta(pergunta) {
    console.log('Mostrando pergunta:', pergunta);
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

function habilitarProximaPergunta() {
    const proximoBtn = document.getElementById('proximo-btn');
    proximoBtn.disabled = false; // Habilitar o botão "Próxima"
}

function determinarCasaSelecionada() {
    // Garante que todas as pontuações sejam números
    pontos = {
        grifinoria: pontos.grifinoria,
        sonserina: pontos.sonserina,
        lufalufa: pontos.lufalufa,
        corvinal: pontos.corvinal
    }

    console.log('Pontos:', pontos);

    // Determina qual casa foi selecionada com base nos pontos acumulados
    const casaSelecionada = Object.keys(pontos).reduce((a, b) => (pontos[a] > pontos[b] ? a : b));
    return casaSelecionada;
}

function redirecionarParaPaginaDaCasa() {
    // Determina a casa selecionada
    const casaSelecionada = determinarCasaSelecionada();
    console.log('Casa selecionada:', casaSelecionada);
    // Redireciona o usuário para a página da casa correspondente
    window.location = `${casaSelecionada}.html`;
}

console.log('Pontos:', pontos);