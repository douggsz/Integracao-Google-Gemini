import cors from "cors";
// Importa o framework Express.js para criar aplicações web Node.js
import express from "express";

// Importa o módulo multer para lidar com uploads de arquivos
import multer from "multer";

// Importa funções controladoras para rotas de posts
import { index, setPosts, updatePost, uploadFiles, chatbotConversation } from "../controllers/postControllers.js";

// Configura o armazenamento de arquivos para o multer
// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica o diretório para armazenar as imagens enviadas
    cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo por simplicidade
    cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
  }
});

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,
}
// Cria uma instância do middleware multer com a configuração de armazenamento
const upload = multer({ dest: "./uploads", storage });

// Define as rotas da aplicação (função middleware)
const routes = (app) => {
  // Habilita o parseamento de dados JSON na requisição
  app.use(express.json());

  app.use(cors(corsOptions));

  // Rota GET para listar posts (provavelmente usando index)
  app.get("/", index);

  // Rota POST para criar novos posts (provavelmente usando setPosts)
  app.post("/posts", setPosts);

  // Rota POST para upload de imagem e processamento (provavelmente usando uploadFiles)
  // - upload.single("image") configura o multer para esperar um único arquivo chamado "image"
  app.post("/posts/upload", upload.single("image"), uploadFiles);

  app.put("/posts/upload/:id",updatePost)

  //app.get("/chatbot", chatbot)
  app.get("/chatbot/:prompt", chatbotConversation)
};

// Exporta a função routes para ser usada em outro arquivo
export default routes;