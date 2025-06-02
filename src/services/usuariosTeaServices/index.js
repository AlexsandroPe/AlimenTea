import api from "../api.js";

export async function getUsuariosTea() {
  try {
    const posts = await api.get("/autistas");
    return posts.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUsuariosTeid(id) {
  try {
    const posts = await api.get(`/autista/${id}`);
    return posts;
  } catch (error) {
    console.log("deu ruim")
    console.error(error.message);
  }
}

export async function adicionarTeaUsers(data) {
  try {
    const responde = await api.post("/autistas", data);
    console.log("Post Criado:", responde.data);
  } catch (error) {
    console.error("Erro ao criar post:", error);
  }
}
