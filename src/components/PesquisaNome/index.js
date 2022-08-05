import { useEffect, useState } from "react";
import { receitaNome } from "../../servico/api";
import SideBar from "../Sidebar";
import "./pesquisa.css";
import Banco from "../ListagemReceita";

export default function PesquisaPorNome() {
  const [nomeReceitas, setNomeReceitas] = useState("");
  const [receitasMostra, setReceitasMostrar] = useState(undefined);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setNomeReceitas(value);
    console.log(value);
  };
  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    receitaNome.retornaReceitaNome(nomeReceitas).then((data) => {
      setReceitasMostrar(data);
      console.log(data);
    });
  };
  if (receitasMostra) {
    return <Banco dataRender={receitasMostra}></Banco>;
  } else {
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
          <button
            className="botaoPesquisa"
            onClick={handleSubmit}
            type="submit"
          >
            Pesquisa
          </button>
        </div>
      </>
    );
  }
}
