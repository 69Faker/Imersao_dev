import express from "express"; // Importa o módulo Express para criar o servidor
import routes from "./src/routes/postsRoutes.js";

const app = express(); // Cria uma instância do aplicativo Express

app.use(express.static("uploads"));
routes(app);

// Configura o servidor para escutar na porta 3000 e imprime uma mensagem no console quando o servidor está pronto
app.listen(3000, () => 
    {
        console.log("SERVIDOR ESCUTANDO....");
    }
);