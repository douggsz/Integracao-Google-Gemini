// Importa o framework Express.js para criar aplicações web Node.js
import express from "express";

// Importa o módulo multer para lidar com uploads de arquivos
import multer from "multer";

// Importa funções controladoras para rotas de posts
import { index, setPosts, uploadFiles } from "../controllers/postControllers.js";

// Configura o armazenamento de arquivos para o multer
const storage = multer.diskStorage({
  // Define a pasta de destino para os arquivos carregados
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  // Define o nome do arquivo utilizando o nome original
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Cria uma instância do middleware multer com a configuração de armazenamento
const upload = multer({ dest: "./uploads", storage });

// Define as rotas da aplicação (função middleware)
const routes = (app) => {
  // Habilita o parseamento de dados JSON na requisição
  app.use(express.json());

  // Rota GET para listar posts (provavelmente usando index)
  app.get("/posts", index);

  // Rota POST para criar novos posts (provavelmente usando setPosts)
  app.post("/posts", setPosts);

  // Rota POST para upload de imagem e processamento (provavelmente usando uploadFiles)
  // - upload.single("image") configura o multer para esperar um único arquivo chamado "image"
  app.post("/posts/upload", upload.single("image"), uploadFiles);
};

// Exporta a função routes para ser usada em outro arquivo
export default routes;