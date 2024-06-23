import express from "express";
import AuthRouter from "./routes/AuthRoutes";
import UserRouter from "./routes/UserRoutes";
import postRoutes from './routes/postRoutes'; // Exemplo de outras rotas
import commentRoutes from './routes/commentRoutes'; // Exemplo de outras rotas

const port = 3000;

const app = express();
app.use(express.json());

app.use("/api/auth", AuthRouter);  // Montando o roteador com o prefixo "/api/auth"
app.use("/api/users", UserRouter); // Exemplo para o UserRouter, ajuste conforme sua necessidade
app.use('/api/posts', postRoutes); // Exemplo de outras rotas
app.use('/api/comments', commentRoutes); // Exemplo de outras rotas



app.listen(port, () => {
  console.log("Servidor rodando na porta " + port);
});
