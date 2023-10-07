const path = require('path');

module.exports = [
  {
    entry: './src/main.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development', // ou 'production' para produção
  },
  {
    entry: './src/quiz.js',
    output: {
      filename: 'quiz.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development', // ou 'production' para produção
  },
  {
    entry: './src/utils.mjs',
    output: {
      filename: 'utils.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development', // ou 'production' para produção
  },
];
