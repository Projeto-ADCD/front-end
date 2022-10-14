import React from "react";
// import img from "../RenderizaRequest/img.jpg";
import img from '../../imgs/neo.png'
import "./index.css";

export default function ReceitaUnica({ receita_unica }) {
  function getImage(receita_unica){
    var qualquerCoisa
    if (receita_unica.has_image === true){
      qualquerCoisa = `https://raw.githubusercontent.com/Projeto-ADCD/crawler/14-atualizacao-crawler-extract-categories/src/extract-infos-recipe/data/${receita_unica.directory_name}/img.jpg`
    }else{
      qualquerCoisa = img
    }
    return qualquerCoisa
  }
  console.log(receita_unica.recipe_json);
  return (
    <div className="ajeitaParedinha">
      <p className="tituloReceita">{receita_unica.recipe_json.nome_receita}</p>
      <img src={getImage(receita_unica)} alt="qualquer" className="imageMano"/>

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
