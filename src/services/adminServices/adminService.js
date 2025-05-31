import api from "../api.js";

export async function getPosts() {
  try {
    const posts = await api.get("/autistas");
    if(posts.data == undefined){
      console.log("sem valor;");
      return;
    }
    return posts;
  } catch (error) {
    console.error(error);
  }
}

export async function criarPost(data) {
  try {
    const responde = await api.post("/autista", data);
    console.log(" Criado:", responde.data);
  } catch (error) {
    console.error("Erro ao criar post:", error);
  }
}
