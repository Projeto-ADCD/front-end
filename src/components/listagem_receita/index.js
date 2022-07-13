import React, { useState, useEffect } from "react";
import "./listagem.css";
import { data } from "./constante";
import img from "./img.jpg";

export default function Banco({ listagem_receita }) {
  return (
    <>
      <h2>Receitas</h2>
      {listagem_receita.map((receita_unica) => {
        return (
          <div className="receitinha">
            <img src={img} alt="Chama" height={130} width={200} />
            <div className="linha">
              <h3>{receita_unica.nome_receita}</h3>
              <h4>{receita_unica.tempo_de_preparo}</h4>
              <h4>{receita_unica.rendimento}</h4>
            </div>
          </div>
        );
      })}
    </>
  );
}
