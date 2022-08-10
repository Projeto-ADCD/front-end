import "./listagem.css";
import img from "./img.jpg";
import { useState } from "react";
import ReceitaUnica from "../ReceitaUnica/index";
import SideBar from "../Sidebar/index";
import { useLocation, useSearchParams } from "react-router-dom";

export default function Banco({ dataRender }) {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  function contructLinkCallNext(){
    let page = searchParams.get("page")
      ? searchParams.get("page")
      : "";
    page = parseInt(page) + 1
    let link = location.pathname + location.search
    let regex = /page=[0-9]+/
    link = link.replace(regex,`page=${page}`)
    console.log(link)
    window.location.href = link;
  }

  function contructLinkCallPrevious(){
    let page = searchParams.get("page")
      ? searchParams.get("page")
      : "";
    page = parseInt(page) - 1
    if(page < 0)
      return
    let link = location.pathname + location.search
    let regex = /page=[0-9]+/
    link = link.replace(regex,`page=${page}`)
    window.location.href = link;
  }

  return (
    <>
      <SideBar></SideBar>
      <div className="paiWidth">
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
        <div className="center">
          <div onClick={contructLinkCallPrevious} className="buttonsPreviousNext pointer">anterior</div>
          <div className="buttonsPreviousNext">{searchParams.get("page")}</div>
          {
            dataRender.length >= 10 ?
          < div onClick={contructLinkCallNext} className="buttonsPreviousNext pointer">próxima</div>:
            ""
          }
        </div>

      </div>
    </>
  );
}
