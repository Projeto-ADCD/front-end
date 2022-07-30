import { useEffect, useState } from "react";
import GeradorInput from "../GeradorInput";
import { adcd } from "../../servico/api";

import "./form.css";
import SideBar from "../Sidebar";

function App() {
  const [ingredientsList, setingredientsList] = useState([""]);
  const [restricoesList, setRestricoesList] = useState([""]);

  const handleSubmit = (e) => {
    const valor = {
      restricoes: restricoesList,
      ingredientes: ingredientsList,
    };
    e.preventDefault();
    console.log(valor);
    adcd.buscaIngredientes(valor);
  };

  return (
    <>
      <SideBar></SideBar>
      <form className="formulario" autoComplete="off">
        <div className="form-field">
          <GeradorInput
            geradorNome="Ingrediente"
            ingredientesList={ingredientsList}
            setIngredientesList={setingredientsList}
          />
          <GeradorInput
            geradorNome="Restriçoes"
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

export default App;
