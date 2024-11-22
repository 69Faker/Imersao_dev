import express from "express"
import { listarPosts } from "../controller/postsController.js";

const routes = (app) =>
{
    app.use(express.json()); // Configura o aplicativo para usar middleware que analisa JSON
    
    // Define a rota GET para "/posts" que retorna todos os posts
    app.get("/posts", listarPosts);
}

export default routes;
