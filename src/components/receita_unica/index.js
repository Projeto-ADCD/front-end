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
      {Object.keys(receita_unica.ingredientes).map((key) => {
        if (key !== "DEFAULT") {
          return (
            <div>
              <h2>{key}</h2>
              <ul>
                {receita_unica.ingredientes[key].map((ingred) => (
                  <li>{ingred}</li>
                ))}
              </ul>
            </div>
          );
        }
      })}
      <h2>PREPARO</h2>
      <ul>
        {receita_unica.passos["DEFAULT"]
          ? receita_unica.passos["DEFAULT"].map((passo_unico) => {
              return <li> {passo_unico}</li>;
            })
          : ""}
      </ul>
      {Object.keys(receita_unica.passos).map((key) => {
        if (key !== "DEFAULT") {
          return (
            <div>
              <h2>{key}</h2>
              <ul>
                {receita_unica.passos[key].map((passo) => (
                  <li>{passo}</li>
                ))}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
}
