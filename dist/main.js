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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst chapeuSeletor = document.getElementById('chapeu-seletor');\r\n\r\nconst frames = [] // Array para armazenar as imagens\r\nconst numFrames = 132; // número total dos frames\r\n\r\n// Preencher o array frames com as urls das imagens\r\nfor (let i = 1; i <= numFrames; i++) {\r\n    frames.push(`/images/sortingHat/hat-${String(i).padStart(3, '0')}.png`);\r\n}\r\n\r\nlet currentFrame = 0; // índice do frame atual\r\n\r\nfunction animateSortingHat() {\r\n    console.log('Loop de animação funcionando!'); // Verifica se o loop está ativo\r\n    chapeuSeletor.src = frames[currentFrame]; // atualiza as imagens\r\n    currentFrame = (currentFrame + 1) % numFrames; // Avança para o próximo frame\r\n}\r\n\r\nchapeuSeletor.onerror = function() {\r\n    console.error('Erro ao carregar a imagem:', chapeuSeletor.src);\r\n};\r\n\r\n// Chama a função animateSortingHat a cada 100 milissegundos para criar a animação\r\nsetInterval(animateSortingHat, 100);\n\n//# sourceURL=webpack://selecaocasas/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;