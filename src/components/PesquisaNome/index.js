import { useEffect, useState } from "react";
import { adcd } from "../../servico/api";
import SideBar from "../Sidebar";
import "./pesquisa.css";

export default function PesquisaPorNome() {
  const [nomeReceitas, setNomeReceitas] = useState("");
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setNomeReceitas(value);
    console.log(value);
  };
  useEffect(() => {
    async function buscaReceita(valor) {
      const resposta = await adcd.buscaReceita(valor);
    }
  }, []);

  const handleSubmit = (e) => {
    const valor = {
      nomeReceita: nomeReceitas,
    };
    e.preventDefault();
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
