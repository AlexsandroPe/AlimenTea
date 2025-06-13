import ListarIngredientes from "../../screens/Ingrediente/index.js";
import api from "../api.js";

export async function getIngredientes() {
  try {
    const ingredites = await api.get("/ingredientes");
    // console.log( typeof ingredites)
    // console.log(ingredites.data[0])
    // console.debug("userTea services: ",  Object.entries(usuariosTEA.data))
    return ingredites.data;
  } catch (error) {
    console.error(error);
  }
}

// export async function getUsuariosTeid(id) {
//   try {
//     const usuarioTEA = await api.get(`/autista/${id}`);
//     return usuarioTEA;
//   } catch (error) {
//     console.log("deu ruim")
//     console.error(error.message);
//   }
// }

export async function addIngredientes(data) {
  try {
    console.log("service ", data)
    // while(Object.keys(data.categorias) == true ){ 
    //     // console.log(Object.keys(data.categorias));
    // }
    // const dataFormat = Object.entries(data.categorias).find(value => {
    //     return value[1] === true;
    // })
    // console.log(dataFormat)
    const responde = await api.post("/ingrediente", data);
    console.log("Post Criado:", responde.data);
  } catch (error) {
    console.error("Erro ao criar post:", error);
  }
}

export async function deletarUserTea(){ 
   
}
