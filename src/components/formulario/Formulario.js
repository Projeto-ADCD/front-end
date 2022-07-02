import { useEffect, useState } from "react";
import GeradorInput from "../GeradorInput";
import APIadcd from "../../servico/api";

import "./form.css";

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
    APIadcd.buscaIngredientes(valor);
  };

  return (
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
  );
}

export default App;
