import { determinarCasaSelecionada } from "./quiz.mjs";
import falas from "./hogwarts-selecao.json"; // Alterado o nome do arquivo JSON
import question from "./questions.json";

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const balaoFala = document.getElementById('balao-fala');

        // Suponha que você tenha um objeto de respostas do usuário
        const respostas = determinarCasaSelecionada();

        // Calcule os pontos das casas com base nas respostas do usuário
        const pontosDasCasas = calcularPontosDasCasas(respostas);

        function calcularPontosDasCasas(respostas) {
            let pontosDasCasas = {
                grifinoria: 0,
                sonserina: 0,
                lufalufa: 0,
                corvinal: 0
            };
        
            // Iterar sobre as respostas dadas pelo usuário
            respostas.forEach((resposta, index) => {
                const pontosPorCasa = question[index].options[resposta].points;
        
                // Adicionar pontos correspondentes à casa
                Object.keys(pontosPorCasa).forEach(casa => {
                    pontosDasCasas[casa] += pontosPorCasa[casa];
                });
            });
        
            return pontosDasCasas;
        }
        
        
        // Determine a casa com maior pontuação
        const casaSelecionada = Object.keys(pontosDasCasas).reduce((a, b) => (pontosDasCasas[a] > pontosDasCasas[b] ? a : b));

        // Determine a mensagem com base na pontuação da casa selecionada
        const faixaPontuacao = pontosDasCasas[casaSelecionada];
        const mensagem = falas.casas[casaSelecionada][faixaPontuacao]; // Ajuste para acessar as mensagens corretamente

        // Exiba a mensagem no balão de fala
        balaoFala.textContent = mensagem;
        balaoFala.style.display = 'block';

    }, 100); // Aguarde 100 milissegundos após o carregamento do DOM
});
