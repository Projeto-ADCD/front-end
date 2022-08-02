import "./listagem.css";
import img from "./img.jpg";
import { useState } from "react";
import ReceitaUnica from "../ReceitaUnica/index";
import SideBar from "../Sidebar/index";

export default function Banco({ dataRender }) {
  return (
    <>
      <SideBar></SideBar>
      <div>
        <h1>Receitas</h1>
        {dataRender.map((receita_unica) => {
          return (
            <a href={"/receita/" + receita_unica.id}>
              <div className="receitinha">
                <img src={img} alt="Chama" height={130} width={200} />
                <div className="linha">
                  <p className="nomeReceita">
                    <b>{receita_unica.recipe_json.nome_receita}</b>
                  </p>
                  <p>{receita_unica.recipe_json.tempo_de_preparo}</p>
                  <p>{receita_unica.recipe_json.rendimento}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}
