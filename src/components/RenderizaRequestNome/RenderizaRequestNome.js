import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Banco from "../ListagemReceita/ListagemReceita";
import { receitaNome } from "../../servico/api";
import TelaLoading from "../TelaCarregamento/TelaCarregamento";

export default function RenderizaRequestNome() {
  const [searchParams] = useSearchParams();
  let ingreds = searchParams.get("nomeReceita")
    ? searchParams.get("nomeReceita")
    : "";
    
  let page = searchParams.get("page")
  ? searchParams.get("page")
  : "";

  let paramOrdem = searchParams.get("paramOrdem") ?
  searchParams.get("paramOrdem") : "";

  let ascending = searchParams.get("ascending") ?
  searchParams.get("ascending") : "";

  let tag = searchParams.get("tag") ?
  searchParams.get("tag") : "";

  const [dataRender, setDataRender] = useState(undefined);

  useEffect(() => {
    console.log(ingreds);
    receitaNome.retornaReceitaNome(ingreds,page, paramOrdem, ascending, tag).then((data) => {
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
