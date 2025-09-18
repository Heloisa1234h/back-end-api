import express from "express";      // Requisição do pacote do express
import dotenv from "dotenv";        // Requisição do pacote dotenv
import { Client } from "pg";        // Requisição do pacote PostgreSQL (pg)

dotenv.config();                   // Carrega as variáveis de ambiente do arquivo .env

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

// Configuração do cliente PostgreSQL com variáveis de ambiente
const client = new Client({
  user: process.env.DB_USER,        // Usuário do banco de dados
  host: process.env.DB_HOST,        // Host do banco de dados
  database: process.env.DB_DATABASE, // Nome do banco de dados
  password: process.env.DB_PASSWORD, // Senha do banco de dados
  port: process.env.DB_PORT,        // Porta do banco de dados
});

client.connect()                    // Conecta ao banco de dados PostgreSQL
  .then(() => console.log("Conectado ao banco de dados PostgreSQL"))
  .catch(err => console.error("Erro ao conectar ao banco de dados", err));

app.get("/", (req, res) => {        // Cria endpoint na rota da raiz do projeto
  console.log("Rota GET / solicitada");
  res.json({
    message: "API para gestão de tarefas",   // ✅ descrição da sua API
    author: "Heloísa Almeida Miranda"        // ✅ substitua pelo seu nome
  });
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço rodando na porta: ${port}`);
});
