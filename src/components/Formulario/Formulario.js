import { useState } from "react";
import GeradorInput from "../GeradorInput/GeradorInput";
import SideBar from "../Sidebar";

import "./form.css";

export default function Formulario() {
  const [ingredientsList, setingredientsList] = useState([""]);
  const [restricoesList, setRestricoesList] = useState([""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let filtered_ingredientsList = ingredientsList.filter((v) => v !== "");
    let filtered_restricoesList = restricoesList.filter((v) => v !== "");
    let ingreds = filtered_ingredientsList.join(",");
    let not_ingreds = filtered_restricoesList.join(",");
    let link = "/pesquisa/filtro?";
    if (filtered_ingredientsList.length > 0) link += `ingredientes=${ingreds}`;
    if (
      filtered_restricoesList.length > 0 &&
      filtered_ingredientsList.length > 0
    )
      link += `&nao_ingredientes=${not_ingreds}`;
    else if (filtered_restricoesList.length > 0)
      link += `nao_ingredientes=${not_ingreds}`;

    link += "&page=0"
    window.location.href = link;
  };

  return (
    <>
      <SideBar></SideBar>
      <form className="formulario" autoComplete="off">
        <div className="titleForm">
          <h1>Pesquisa por ingredientes e restrições</h1>  
        </div> 
        <div className="form-field">
          <GeradorInput
            geradorNome="Ingredientes"
            ingredientesList={ingredientsList}
            setIngredientesList={setingredientsList}
          />
          <GeradorInput
            geradorNome="Restrições"
            ingredientesList={restricoesList}
            setIngredientesList={setRestricoesList}
          />
        </div>
        <div className="send-division">
          <input type="submit" onClick={handleSubmit} />
        </div>
      </form>
    </>
  );
}
