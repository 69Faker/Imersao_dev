import { getAllPosts } from "../models/postsModels.js";

export async function listarPosts(req, res)
{
    const posts = await getAllPosts(); // Busca todos os posts usando a função getAllPosts
    res.status(200).json(posts); // Retorna os posts em formato JSON com status 200 (OK)
}