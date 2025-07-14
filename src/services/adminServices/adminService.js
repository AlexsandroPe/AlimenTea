import { insertStorage } from "../../storage/async.js";
import api from "../api.js";

// export async function getPosts(id) {
//   try {
//     const posts = await api.get("/admin");
//     return posts;
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function criarAdmin(data) {
  // console.log(data.email)
  const retorno = await api.get(`/admin/${data.email}`);
  // console.log(Object.entries(retorno))
  console.log(retorno.data.email)
  if(retorno.data === ""){
    try {
      const responde = await api.post("/admin", data);
      console.log(" Criado:", responde.data);
    } catch (error) {
      console.error("Erro ao criar post:", error.message);
    }
  }else{
    console.log("existe")
  }

}

export async function loginGet(data) { 
  console.log(data)
  try {
    const loginRetorno = await api.post(`/login`, data);
    console.log("loginREsult: ", loginRetorno.data)
    if(!loginRetorno.data.email || !loginRetorno.data.password) {
      console.log("Precisa botar todos os dados");
      return {email: loginRetorno.data.email, senha: loginRetorno.data.password}
    }
    insertStorage("token", loginRetorno.data.token);
    return {status: true, token: loginRetorno.data.token}
  } catch (error) {
    console.log("usuario não encontrado")
    return {status: false, email: true, password: true}
  }
}

export async function deleteAdmin(idadmin) { 
  try {
    const retornoDelete = await api.delete(`/admin/${idadmin}`);
    console.log(retornoDelete.data.email)
  } catch (error) {
    const keys = Object.keys(error);
    console.log(keys)
  }
}
