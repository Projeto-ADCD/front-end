import axios from "axios";

const { REACT_APP_URL_API_ADCD } = process.env;

const APIadcd = axios.create({
  baseURL: REACT_APP_URL_API_ADCD,
  headers: {
    "Content-Type": "application/json",
  },
});

const adcd = {
  async buscaIngredientes(listaIngredientes) {
    const resposta = await APIadcd.post("/pesquisa", { listaIngredientes });

    return resposta.data;
  },
};

export default adcd;
