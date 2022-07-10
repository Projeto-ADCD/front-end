import React from "react";
import { data } from "../listagem_receita/constante";
import img from "../listagem_receita/img.jpg";

function ReceitaUnica() {
  return (
    <div>
      <p>{data[2].nome_receita}</p>
      <img src={img} alt="qualquer" />
      <ul>
        {data[2].ingredientes.DEFAULT
          ? data[2].ingredientes.DEFAULT.map((ingrediente) => {
              return <li>{ingrediente}</li>;
            })
          : ""}
      </ul>
      {Object.keys(data[2].ingredientes).map((key) => {
        if (key != "DEFAULT") {
          return (
            <div>
              <h2>{key}</h2>
              {data[2].ingredientes[key].map((ingred) => (
                <li>{ingred}</li>
              ))}
            </div>
          );
        }
      })}
    </div>
  );
}

export default ReceitaUnica;
