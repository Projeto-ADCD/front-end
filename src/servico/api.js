import axios from "axios";

const { REACT_APP_URL_API_ADCD } = process.env;

const APIadcd = axios.create({
  baseURL: REACT_APP_URL_API_ADCD,
  headers: {
    "Content-Type": "application/json",
  },
});

export const adcd = {
  async buscaIngredientes(lista_ingredientes, lista_nao_ingredientes, page, paramOrdem, ascending) {
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
    link += `&page=${page}`
    console.log(link)
    const urlChamado = paramOrdem !== "" ? 
      link + `&paramOrdem=${paramOrdem}&ascending=${ascending}` :
      link
      
    let resposta = await APIadcd.get(urlChamado);
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
  async retornaTodasReceitas(page, paramOrdem, ascending) {
    let urlChamado = "/receitas?page=" + page
    if (paramOrdem === "tempo"){
      urlChamado = `/sort/tempo?ascending=${ascending}&page=${page}`
    }else if (paramOrdem === "porcao"){
      urlChamado = `/sort/porcao?ascending=${ascending}&page=${page}`
    }
    
    console.log(urlChamado)
    const resposta = await APIadcd.get(urlChamado);
    resposta.data = resposta.data.map((recipe) => {
      recipe.recipe_json = JSON.parse(recipe.recipe_json);
      return recipe;
    });
    return resposta.data.slice(0, 100);
  },
};

export const receitaNome = {
  async retornaReceitaNome(nomeReceita, page,paramOrdem, ascending ) {
    const urlChamado = paramOrdem !== "" ?  
        `/pesquisa?nomeReceita=${nomeReceita}&page=${page}&paramOrdem=${paramOrdem}&ascending=${ascending}` :
      `/pesquisa?nomeReceita=${nomeReceita}&page=${page}`

    const resposta = await APIadcd.get(urlChamado);

    resposta.data = resposta.data.map((recipe) => {
      recipe.recipe_json = JSON.parse(recipe.recipe_json);
      return recipe;
    });
    return resposta.data;
  },
};
