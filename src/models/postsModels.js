import conectarAoBanco from "../config/db-config.js"; // Importa a função de conexão ao banco de dados

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão do ambiente

export async function getAllPosts()
{
    const db = conexao.db("imersao"); // Obtém a referência do banco de dados "imersao" a partir da conexão
    const colecao = db.collection("posts"); // Obtém a coleção "posts" do banco de dados
    return colecao.find().toArray(); // Busca todos os documentos da coleção e retorna como um array
}
