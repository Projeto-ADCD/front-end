import { useEffect, useState } from "react";
import "./form.css";

function App() {
  const [ingredientsList, setingredientsList] = useState([""]);
  const [restricoesList, setRestricoesList] = useState([""]);

  const handleIngredientList = (e, index) => {
    const { name, value } = e.target; //service, o que foi digitado dentro do imput
    console.log(name, value);
    const list = [...ingredientsList];

    list[index] = value;
    setingredientsList(list);
  };
  const handleRestricoesList = (e, index) => {
    const { name, value } = e.target; //service, o que foi digitado dentro do imput
    console.log(name, value);
    const list = [...restricoesList];

    list[index] = value;
    setRestricoesList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...ingredientsList];
    list.splice(index, 1);
    setingredientsList(list);
  };
  const handleRestricoesRemove = (index) => {
    const list = [...restricoesList];
    list.splice(index, 1);
    setRestricoesList(list);
  };

  const handleServiceAdd = () => {
    setingredientsList([...ingredientsList, ""]);
  };
  const handleRestricoesAdd = () => {
    setRestricoesList([...restricoesList, ""]);
  };

  const handleSubmit = (e) => {
    /*  {
      console.log(ingredientsList);
    “restricoes”: String[],
    “ingredientes”: String[]	
  } */
    const valor = {
      restricoes: restricoesList,
      ingredientes: ingredientsList,
    };
    e.preventDefault();
    fetch("http://localhost:8080/blogs", {
      method: "get",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(valor),
    }).then(() => console.log("ingredientes mandados"));
  };

  return (
    <form className="formulario" autoComplete="off">
      <div className="form-field">
        <div className="inputs">
          <label htmlFor="ingrediente">Ingrediente(s)</label>
          {ingredientsList.map((singleService, index) => (
            <div key={index} className="services">
              <div className="first-division">
                <input
                  name="ingrediente"
                  type="text"
                  id="ingrediente"
                  value={singleService}
                  onChange={(e) => handleIngredientList(e, index)}
                  required
                />
                {ingredientsList.length - 1 === index && (
                  <button
                    type="button"
                    onClick={handleServiceAdd}
                    className="add-btn"
                  >
                    <span>Adicionar mais</span>
                  </button>
                )}
              </div>
              <div className="second-division">
                {ingredientsList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleServiceRemove(index)}
                  >
                    <span>remover</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="inputs">
          <label htmlFor="restricao">Restrição</label>
          {restricoesList.map((singleService, index) => (
            <div key={index} className="services">
              <div className="first-division">
                <input
                  name="restricao"
                  type="text"
                  id="restricao"
                  value={singleService}
                  onChange={(e) => handleRestricoesList(e, index)}
                  required
                />
                {restricoesList.length - 1 === index && (
                  <button
                    type="button"
                    onClick={handleRestricoesAdd}
                    className="add-btn"
                  >
                    <span>Adicionar mais</span>
                  </button>
                )}
              </div>
              <div className="second-division">
                {restricoesList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleRestricoesRemove(index)}
                  >
                    <span>remover</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="send-division">
        <input type="submit" onClick={handleSubmit} />
      </div>
    </form>
  );
}

export default App;
