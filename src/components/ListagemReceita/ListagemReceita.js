import "./listagem.css";
import defaultImg from "../../imgs/neo.png"
import SideBar from "../Sidebar/index";
import { useLocation, useSearchParams } from "react-router-dom";
import { pegaImagem } from "../../servico/api";
import { useEffect } from "react";

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

  function getImage(receita_unica){
    var qualquerCoisa
    if (receita_unica.has_image === true){
      qualquerCoisa = `https://raw.githubusercontent.com/Projeto-ADCD/crawler/14-atualizacao-crawler-extract-categories/src/extract-infos-recipe/data/${receita_unica.directory_name}/img.jpg`
    }else{
      qualquerCoisa = defaultImg
    }
    return qualquerCoisa
  }

  return (
    <>
      <SideBar></SideBar>
      <div className="paiWidth">
        <h1>Receitas</h1>
        <div className="ordenacao">
        <label for="order">Ordenação: </label>
        <select id="receitas" name="order" size="1">
          <option value="menosPorc">Gera menos porçoes</option>
          <option value="maisPorc">Gera mais porçoes</option>
          <option value="menosTempo">Demora menos tempo</option>
          <option value="maisTempo">Demora mais tempo </option>
        </select>
        </div>
        
        {dataRender.map((receita_unica) => {
          return (
            <a href={"/receita/" + receita_unica.id}>
              <div className="receitinha">

                <img src={getImage(receita_unica)} alt="Chama" height={130} width={135}/>
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
