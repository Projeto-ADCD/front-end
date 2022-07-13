import React from "react";
import img from "../listagem_receita/img.jpg";

export default function ReceitaUnica({ receita_unica }) {
  console.log(receita_unica);
  return (
    <div>
      <p>{receita_unica.nome_receita}</p>
      <img src={img} alt="qualquer" />
      <ul>
        {receita_unica.ingredientes["DEFAULT"]
          ? receita_unica.ingredientes["DEFAULT"].map((ingrediente_unico) => {
              return <li> {ingrediente_unico}</li>;
            })
          : ""}
      </ul>
      <ul>
        {Object.keys(receita_unica.ingredientes).map((key) => {
          if (key !== "DEFAULT") {
            return (
              <div>
                <h2>{key}</h2>
                {receita_unica.ingredientes[key].map((ingred) => (
                  <li>{ingred}</li>
                ))}
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}
