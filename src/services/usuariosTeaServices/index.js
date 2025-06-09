import api from "../api.js";

export async function getUsuariosTea() {
  try {
    const usuariosTEA = await api.get("/autistas");
    return usuariosTEA.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUsuariosTeid(id) {
  try {
    const usuarioTEA = await api.get(`/autista/${id}`);
    return usuarioTEA;
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

export async function deletarUserTea(){ 
   
}
