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
  console.log(data.senha)
  const loginRetorno = await api.get(`/admin/${data.email}/${data.senha}`);
  console.log(typeof loginRetorno.data.id);
  
  console.log(loginRetorno.data.id);
  let existe;
  if(loginRetorno.data.id > 0){
    console.log("existe")
    existe = true
  }else{
    console.log("nao existe") 
    existe = false
  }
  console.log(existe)
  return existe;
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
