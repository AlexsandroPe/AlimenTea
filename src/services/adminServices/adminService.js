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
  const loginRetorno = await api.post(`/login`, data);
  // console.log(loginRetorno.data);
  // console.log("Retorno login -->", loginRetorno.data);
  // console.log(typeof loginRetorno.data.id);
  
  let message = loginRetorno.data.message;
  let existe;
  if(loginRetorno.data.idUsuario.id > 0){
    console.log("existe")
    console.log(typeof loginRetorno.data.token)
    insertStorage("token1", loginRetorno.data.token);
    existe = true;
    return loginRetorno;
  }else{
    console.log("nao existe"); 
    existe = false;
  }
  console.log(existe);
  return {status: existe, loginMessage: message};
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
