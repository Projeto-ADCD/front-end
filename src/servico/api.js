import axios from "axios";

const { REACT_APP_URL_API_ADCD } = process.env;

const APIadcd = axios.create({
  baseURL: REACT_APP_URL_API_ADCD,
  headers: {
    "Content-Type": "application/json",
  },
});

export const adcd = {
  async buscaIngredientes(lista_ingredientes, lista_nao_ingredientes) {
    lista_ingredientes = lista_ingredientes.filter((v) => v !== "");
    lista_nao_ingredientes = lista_nao_ingredientes.filter((v) => v !== "");

    let ingredientes = lista_ingredientes.join(",");
    let not_ingredientes = lista_nao_ingredientes.join(",");

    console.log(lista_ingredientes, lista_nao_ingredientes);
    let link = "/pesquisa/filtro?";
    if (lista_ingredientes.length > 0) link += `ingredientes=${ingredientes}`;
    if (lista_ingredientes.length > 0 && lista_nao_ingredientes.length > 0)
      link += `&nao_ingredientes=${not_ingredientes}`;
    else if (lista_nao_ingredientes.length > 0)
      link += `nao_ingredientes=${not_ingredientes}`;

    let resposta = await APIadcd.get(link);
    resposta.data = resposta.data.map((recipe) => {
      recipe.recipe_json = JSON.parse(recipe.recipe_json);
      return recipe;
    });
    return resposta.data;
  },
};

export const receita_id = {
  async buscaReceita(id) {
    const resposta = await APIadcd.get(`/receitas/${id}`);
    return resposta.data;
  },
};

export const receitas = {
  async retornaTodasReceitas() {
    const resposta = await APIadcd.get("/receitas");
    resposta.data = resposta.data.map((recipe) => {
      recipe.recipe_json = JSON.parse(recipe.recipe_json);
      return recipe;
    });
    return resposta.data.slice(0, 100);
  },
};

export const receitaNome = {
  async retornaReceitaNome(nomeReceita) {
    const resposta = await APIadcd.get(`/pesquisa?nomeReceita=${nomeReceita}`);
    resposta.data = resposta.data.map((recipe) => {
      recipe.recipe_json = JSON.parse(recipe.recipe_json);
      return recipe;
    });
    return resposta.data;
  },
};
