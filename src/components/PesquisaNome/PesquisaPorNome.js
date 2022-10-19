import { useEffect, useState } from "react";

import SideBar from "../Sidebar";
import "./pesquisa.css";

export default function PesquisaPorNome() {
  const [nomeReceitas, setNomeReceitas] = useState("");
  
  const handleChangeInput = (e) => {
    const { _, value } = e.target;
    setNomeReceitas(value);
    console.log(value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    let link = "/pesquisa/pesquisanome?nomeReceita=";
    if (nomeReceitas.length > 0) link += nomeReceitas;
    link += "&page=0"
    window.location.href = link;
  };
  return (
    <>
      <SideBar></SideBar>

      <div className="pesquisaPorNomeClass">
        <h1>Pesquisa por Nome</h1>
        <hr />
        <input
          className="pesqNome"
          name="receita"
          type="text"
          value={nomeReceitas}
          onChange={handleChangeInput}
          required
        />
        <button className="botaoPesquisa" onClick={handleSubmit} type="submit">
          Pesquisa
        </button>
      </div>
    </>
  );
}
