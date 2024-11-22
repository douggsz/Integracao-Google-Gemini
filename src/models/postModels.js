// Importa a função para conectar ao banco de dados
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/db.js";

// Estabelece a conexão com o banco de dados
const conection = await conectarAoBanco(process.env.CONECTION);

// Seleciona o banco de dados 'node-imersao'
const banco = conection.db("node-imersao");

// Seleciona a coleção 'posts'
const posts = banco.collection("posts");

// Função assíncrona para obter todos os posts
export async function getPosts() {
  // Busca todos os posts da coleção 'posts' e retorna como um array
  return posts.find().toArray();
}

// Função assíncrona para criar um novo post
export async function createPost(post) {
  // Insere o novo post na coleção 'posts' e retorna o resultado da inserção
  return posts.insertOne(post);
}

export async function updatePosts(id,post) {

  const newPost = ObjectId.createFromHexString(id)

  return posts.updateOne({_id: new ObjectId(newPost)},{$set: post})
}
