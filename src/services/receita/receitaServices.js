import ListarIngredientes from "../../screens/Ingrediente/index.js";
import api from "../api.js";

export async function getReceitas() {
  try {
    const receitas = await api.get("/receitas");
    // console.log(receitas.data);
    return receitas.data;
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

export async function addReceita(data) {
  try {
    console.log("receita Service ", data)
    // while(Object.keys(data.categorias) == true ){ 
    //     // console.log(Object.keys(data.categorias));
    // }
    // const dataFormat = Object.entries(data.categorias).find(value => {
    //     return value[1] === true;
    // })
    // console.log(dataFormat)

    const receitaRes= await api.post("/receita", data);
    console.log("Receita Criada:", receitaRes.data);
  } catch (error) {
    console.error("Erro ao criar receita:", error);
  }
}

export async function delReceita(receitaId){ 

}
