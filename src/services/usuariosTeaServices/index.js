import api from "../api.js";

export async function getUsuariosTea() {
  try {
    const usuariosTEA = await api.get("/autistas");
    // console.debug("userTea services: ",  Object.entries(usuariosTEA.data))
    return usuariosTEA.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUsuariosTeid(id) {
  try {
    const usuarioTEA = await api.get(`/autistas/${id}`);
    return usuarioTEA;
  } catch (error) {
    console.log("deu ruim")
    console.error(error.message);
  }
}

export async function adicionarTeaUsers(data) {
  try {
    // console.log(data)
    const responde = await api.post("/autistas", data);
    // console.log("Post Criado:", responde.data);
  } catch (error) {
    console.error("Erro ao criar post:", error);
  }
}

export async function deletarUserTea(){ 
   
}
