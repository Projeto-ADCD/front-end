import { useEffect, useState } from "react";
import "./form.css";

function App() {
  const [ingredientsList, setingredientsList] = useState([""]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...ingredientsList];

    list[index] = value;
    setingredientsList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...ingredientsList];
    list.splice(index, 1);
    setingredientsList(list);
  };

  const handleServiceAdd = () => {
    setingredientsList([...ingredientsList, ""]);
  };

  const handleSubmit = () => {
    console.log(ingredientsList);
  };

  useEffect(() => console.log(ingredientsList), []);
  return (
    <form className="App" autoComplete="off">
      <div className="form-field">
        <label htmlFor="service">Service(s)</label>
        {ingredientsList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input
                name="service"
                type="text"
                id="service"
                value={singleService}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              {ingredientsList.length - 1 === index && (
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                >
                  <span>Adicionar mais ingrediente</span>
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
        <div className="send-division">
          <input type="submit" onClick={handleSubmit} />
        </div>
      </div>
    </form>
  );
}

export default App;
