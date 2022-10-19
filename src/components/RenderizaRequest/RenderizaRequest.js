import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { adcd } from "../../servico/api";
import Banco from "../ListagemReceita/ListagemReceita";
import TelaLoading from "../TelaCarregamento/TelaCarregamento";

export default function RenderizaRequest() {
  const [searchParams] = useSearchParams();
  let ingreds = (
    searchParams.get("ingredientes") ? searchParams.get("ingredientes") : ""
  ).split(",");
  let not_ingreds = (
    searchParams.get("nao_ingredientes")
      ? searchParams.get("nao_ingredientes")
      : ""
  ).split(",");
  let page = searchParams.get("page")
  ? searchParams.get("page")
  : ""
  
  let paramOrdem = searchParams.get("paramOrdem") ?
  searchParams.get("paramOrdem") : "";

  let ascending = searchParams.get("ascending") ?
  searchParams.get("ascending") : "";

  const [dataRender, setDataRender] = useState(undefined);

  useEffect(() => {
    console.log(ingreds, not_ingreds);
    adcd.buscaIngredientes(ingreds, not_ingreds, page, paramOrdem, ascending).then((data) => {
      console.log(data);
      setDataRender(data);
    });
  }, []);

  if (dataRender) {
    return <Banco dataRender={dataRender}></Banco>;
  }
  return (
    <>
     <TelaLoading></TelaLoading>
    </>
  );
}
