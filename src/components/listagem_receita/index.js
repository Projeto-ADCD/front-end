import "./listagem.css";
import img from "./img.jpg";
import { useState } from "react";
import ReceitaUnica from "../receita_unica/index";
import SideBar from "../Sidebar/index"

export default function Banco({ listagem_receita }) {
  const [recipeToRender, setRecipeTorender] = useState(undefined);

  return (
    <>
      <SideBar></SideBar>
      {
        recipeToRender ?  (
          <>
            <ReceitaUnica receita_unica={recipeToRender}></ReceitaUnica>
          </>
        ) :
        (
          <>
            <div>
              <h2>Receitas</h2>
              {listagem_receita.map((receita_unica) => {
                return (
                  <div
                  className="receitinha"
                    onClick={() => setRecipeTorender(receita_unica)}
                  >
                    <img src={img} alt="Chama" height={130} width={200} />
                    <div className="linha">
                      <h4 className="nomeReceita">{receita_unica.nome_receita}</h4>
                      <p>{receita_unica.tempo_de_preparo}</p>
                      <p>{receita_unica.rendimento}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )
      }
    </>
  )
}
