import api from "../api.js";

export async function getDiario(id) {
  try {
    // console.log("diarioService: ", id)
    const receitas = await api.get(`/diario/${id}`);
    // console.log(receitas.data);
    return receitas.data;
  } catch (error) {
    console.error(error);
  }
}

export async function addDiario(data) {
  try {
    console.log("receita Service ", data)
    const diarioRes= await api.post("/diario", data);
  } catch (error) {
    console.error("Erro ao criar receita:", error);
  }
}
/*
export async function delReceita(receitaId){ 
  
}
*/
