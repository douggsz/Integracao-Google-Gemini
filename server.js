// Importa o framework Express.js
import express from 'express';

// Importa as rotas definidas no arquivo postRoutes.js
import routes from './src/routes/postRoutes.js';

// Cria uma instância do aplicativo Express.js
const app = express();

app.use(express.static('uploads'));

// Registra as rotas no aplicativo Express.js
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});