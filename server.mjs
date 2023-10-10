import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'path';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 3000;

// Configurar o middleware para servir arquivos estáticos na pasta 'public'
app.use(express.static(join(__dirname, 'public'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.json')) {
      res.setHeader('Content-Type', 'application/json');
    }
  },
}));

// Configurar rota para o arquivo JSON de perguntas
app.get('/src/questions.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(join(__dirname, 'src', 'questions.json'));
});

// Configurar rota para o arquivo JSON de hogwarts-selecao.json
app.get('/src/hogwarts-selecao.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(join(__dirname, 'src', 'hogwarts-selecao.json'));
});

// Configurar rota para o arquivo CSS
app.get('/menu.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css'); // Definir o tipo MIME como CSS
  res.sendFile(join(__dirname, '/../assets/menu.css'));
});

// Rota para a página principal
app.get('/', (req, res) => {
  // Substitua o caminho abaixo pelo caminho real do seu arquivo index.html
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

// Rota para o arquivo index.mjs
app.get('/src/index.mjs', (req, res) => {
  res.sendFile(join(__dirname, 'src', 'index.mjs'));
});

// Configurar rota para o arquivo do menu
app.get('/menu', (req, res) => {
  try {
    // Substitua '__dirname' pelo caminho real para o diretório onde 'server.mjs' está localizado
    // e depois construa o caminho para 'menu.html' a partir desse diretório
    res.sendFile(path.join(__dirname, '/../assets/menu.html'));
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Rota para o arquivo casas.mjs
app.get('/src/casas.mjs', (req, res) => {
  res.sendFile(join(__dirname, 'src', 'casas.mjs'));
});

// Rota para o arquivo quiz.mjs
app.get('/src/quiz.mjs', (req, res) => {
  res.sendFile(join(__dirname, 'src', 'quiz.mjs'));
});

// Rota para o arquivo util.mjs
app.get('/src/utils.mjs', (req, res) => {
  res.sendFile(join(__dirname, 'src', 'utils.mjs'));
});

app.get('/grifinoria.html', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'grifinoria.html'));
});

app.get('/lufalufa.html', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'lufalufa.html'));
});

app.get('/corvinal.html', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'corvinal.html'));
});

app.get('/sonserina.html', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'sonserina.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor Express está rodando na porta ${PORT}`);
});
