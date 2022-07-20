import React from "react";
import img from "../listagem_receita/img.jpg";
import "./index.css";

export default function ReceitaUnica({ receita_unica }) {
  console.log(receita_unica.recipe_json);
  return (
    <div>
      <p className="tituloReceita">{receita_unica.recipe_json.nome_receita}</p>
      <img src={img} alt="qualquer" />

      <h2 className="receitaParte">INGREDIENTES</h2>
      <ul>
        {receita_unica.recipe_json.ingredientes["DEFAULT"]
          ? receita_unica.recipe_json.ingredientes["DEFAULT"].map(
              (ingrediente_unico) => {
                return <li> {ingrediente_unico}</li>;
              }
            )
          : ""}
      </ul>
      {Object.keys(receita_unica.recipe_json.ingredientes).map((key) => {
        if (key !== "DEFAULT") {
          return (
            <div>
              <h2>{key}</h2>
              <ul>
                {receita_unica.recipe_json.ingredientes[key].map((ingred) => (
                  <li>{ingred}</li>
                ))}
              </ul>
            </div>
          );
        }
      })}
      <h2 className="receitaParte">PREPARO</h2>
      <ul>
        {receita_unica.recipe_json.passos["DEFAULT"]
          ? receita_unica.recipe_json.passos["DEFAULT"].map((passo_unico) => {
              return <li> {passo_unico}</li>;
            })
          : ""}
      </ul>
      {Object.keys(receita_unica.recipe_json.passos).map((key) => {
        if (key !== "DEFAULT") {
          return (
            <div>
              <h2>{key}</h2>
              <ul>
                {receita_unica.recipe_json.passos[key].map((passo) => (
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
