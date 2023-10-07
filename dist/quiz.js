/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/quiz.js":
/*!*********************!*\
  !*** ./src/quiz.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ \"./src/utils.mjs\");\n\r\n\r\nlet perguntaAtual; // Variável que armazena a pergunta atual\r\nlet perguntaIndex = 0; // Índice da pergunta atual\r\nlet perguntas;\r\nlet pontos = { corvinal: 0, sonserina: 0, lufalufa: 0, grifinoria: 0 }; // Objeto para armazenar pontos das casas\r\n\r\nasync function carregarPerguntas() {\r\n    try {\r\n        const response = await fetch('src/questions.json');\r\n        const perguntas = await response.json();\r\n        const perguntasEmbaralhadas = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.embaralharPerguntas)(perguntas);\r\n        console.log(perguntasEmbaralhadas);\r\n        return perguntasEmbaralhadas; // Retorna o array de perguntas\r\n    } catch (error) {\r\n        console.error('Erro ao carregar as perguntas:', error);\r\n        return [];\r\n    }\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', async () => {\r\n    perguntas = await carregarPerguntas(); // Carrega as perguntas e atribui à variável global perguntas\r\n\r\n    // Verificar se há perguntas carregadas\r\n    if (perguntas.length > 0) {\r\n        console.log('Perguntas carregadas:', perguntas);\r\n        mostrarPergunta(perguntas[perguntaIndex]); // Mostrar a primeira pergunta\r\n    } else {\r\n        console.error('Nenhuma pergunta encontrada no arquivo JSON.');\r\n    }\r\n    \r\n    const proximoBtn = document.getElementById('proximo-btn');\r\n    proximoBtn.addEventListener('click', () => {\r\n        // Lógica para avançar para a próxima pergunta\r\n    });\r\n});\r\n\r\nfunction mostrarPergunta(pergunta) {\r\n    perguntaAtual = pergunta; // Armazenar a pergunta atual\r\n    const perguntaTexto = document.getElementById('pergunta-texto');\r\n    const opcoesResposta = document.getElementById('opcoes-resposta');\r\n\r\n    perguntaTexto.textContent = pergunta.question;\r\n\r\n    // Limpar as opções de resposta antes de adicionar novas\r\n    opcoesResposta.innerHTML = '';\r\n\r\n    // Adicionar opções de resposta na página\r\n    pergunta.options.forEach((opcao, index) => {\r\n        const opcaoBtn = document.createElement('button');\r\n        opcaoBtn.className = 'opcao-btn';\r\n        opcaoBtn.textContent = opcao.text;\r\n\r\n        // Adicionar evento de clique para a opção de resposta\r\n        opcaoBtn.addEventListener('click', () => selecionarResposta(opcaoBtn, opcao, index));\r\n\r\n        opcoesResposta.appendChild(opcaoBtn);\r\n    });\r\n}\r\n\r\nfunction selecionarResposta(opcaoBtn, opcao, index) {\r\n    // Remover a classe 'opcao-selecionada' de todas as opções\r\n    const todasOpcoes = document.querySelectorAll('.opcao-btn');\r\n    todasOpcoes.forEach(opcao => {\r\n        opcao.classList.remove('selected');\r\n    });\r\n    \r\n    // Adicionar a classe 'opcao-selecionada' à opção de resposta clicada\r\n    opcaoBtn.classList.add('selected');\r\n\r\n    // Lógica para calcular pontos e atualizar o objeto 'pontos'\r\n    const pontosOpcao = opcao.points;\r\n    pontos.corvinal += pontosOpcao.corvinal || 0;\r\n    pontos.sonserina += pontosOpcao.sonserina || 0;\r\n    pontos.lufalufa += pontosOpcao.lufalufa || 0;\r\n    pontos.grifinoria += pontosOpcao.grifinoria || 0;\r\n\r\n    habilitarProximaPergunta(); \r\n\r\n    }\r\n\r\n\r\nfunction habilitarProximaPergunta() {\r\n    const proximoBtn = document.getElementById('proximo-btn');\r\n    proximoBtn.disabled = false; // Habilitar o botão \"Próxima\"\r\n}\r\n\r\n// ... (restante do seu código quiz.js)\r\n\r\n\r\n// Restante do seu código quiz.js\r\n\r\n\r\n// Inicialização: Carregar perguntas e mostrar a primeira pergunta\r\ncarregarPerguntas().then((perguntas) => {\r\n    // Verificar se há perguntas carregadas\r\n    if (perguntas.length > 0) {\r\n        mostrarPergunta(perguntas[perguntaIndex]); // Mostrar a primeira pergunta\r\n    } else {\r\n        console.error('Nenhuma pergunta encontrada no arquivo JSON.');\r\n    }\r\n});\r\n\r\n// Adicione um event listener ao botão \"Próxima\"\r\nconst proximoBtn = document.getElementById('proximo-btn');\r\nproximoBtn.addEventListener('click', () => {\r\n    const opcoesSelecionadas = document.querySelectorAll('.opcao-btn.selected');\r\n\r\n    if (opcoesSelecionadas.length > 0) {\r\n        // Processar os pontos das respostas selecionadas aqui, se necessário\r\n\r\n        // Avança para a próxima pergunta\r\n        perguntaIndex++;\r\n        if (perguntaIndex < perguntas.length) {\r\n            mostrarPergunta(perguntas[perguntaIndex]); // Mostrar a próxima pergunta\r\n        } else {\r\n            console.log('Fim das perguntas.'); // Todas as perguntas foram respondidas\r\n            console.log('Pontos:', pontos); // Mostrar os pontos acumulados\r\n\r\n            redirecionarParaPaginaDaCasa();\r\n        }\r\n\r\n        // Remover a classe 'selected' de todas as opções de resposta ao avançar para a próxima pergunta\r\n        const todasOpcoes = document.querySelectorAll('.opcao-btn');\r\n        todasOpcoes.forEach(opcao => {\r\n            opcao.classList.remove('selected');\r\n        });\r\n    } else {\r\n        // Exibe uma mensagem para o usuário selecionar uma resposta antes de avançar\r\n        alert('Por favor, selecione uma resposta antes de avançar para a próxima pergunta.');\r\n    }\r\n});\r\n\r\nfunction determinarCasaSelecionada() {\r\n    // Garante que todas as pontuações sejam números\r\n    pontos = {\r\n        grifinoria: pontos.grifinoria,\r\n        sonserina: pontos.sonserina,\r\n        lufalufa: pontos.lufalufa,\r\n        corvinal: pontos.corvinal\r\n    }\r\n\r\n    // Determina qual casa foi selecionada com base nos pontos acumulados\r\n    const casaSelecionada = Object.keys(pontos).reduce((a, b) => (pontos[a] > pontos[b] ? a : b));\r\n    return casaSelecionada;\r\n}\r\n\r\nfunction redirecionarParaPaginaDaCasa() {\r\n    // Determina a casa selecionada\r\n    const casaSelecionada = determinarCasaSelecionada();\r\n    \r\n    // Redireciona o usuário para a página da casa correspondente\r\n    window.location = `${casaSelecionada}.html`;\r\n}\r\n\n\n//# sourceURL=webpack://selecaocasas/./src/quiz.js?");

/***/ }),

/***/ "./src/utils.mjs":
/*!***********************!*\
  !*** ./src/utils.mjs ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   embaralharArray: () => (/* binding */ embaralharArray),\n/* harmony export */   embaralharPerguntas: () => (/* binding */ embaralharPerguntas)\n/* harmony export */ });\n// Função para embaralhar um array usando o algoritmo de Fisher-Yates\r\nfunction embaralharArray(array) {\r\n    for (let i = array.length - 1; i > 0; i--) {\r\n        const j = Math.floor(Math.random() * (i + 1));\r\n        [array[i], array[j]] = [array[j], array[i]];\r\n    }\r\n    return array;\r\n}\r\n\r\n// Função para embaralhar as perguntas do questionário\r\nfunction embaralharPerguntas(perguntas) {\r\n    // Crie uma cópia do array de perguntas para evitar modificar o array original\r\n    const perguntasEmbaralhadas = [...perguntas];\r\n    // Embaralhe as perguntas usando a função de embaralhamento de array\r\n    return embaralharArray(perguntasEmbaralhadas);\r\n}\r\n\n\n//# sourceURL=webpack://selecaocasas/./src/utils.mjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/quiz.js");
/******/ 	
/******/ })()
;