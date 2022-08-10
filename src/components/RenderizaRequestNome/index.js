import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Banco from "../ListagemReceita";
import { receitaNome } from "../../servico/api";

export default function RenderizaRequestNome() {
  const [searchParams] = useSearchParams();
  let ingreds = searchParams.get("nomeReceita")
    ? searchParams.get("nomeReceita")
    : "";
  let page = searchParams.get("page")
  ? searchParams.get("page")
  : "";

  const [dataRender, setDataRender] = useState(undefined);

  useEffect(() => {
    console.log(ingreds);
    receitaNome.retornaReceitaNome(ingreds,page).then((data) => {
      console.log(data);
      setDataRender(data);
    });
  }, []);

  if (dataRender) {
    return <Banco dataRender={dataRender}></Banco>;
  }
  return (
    <>
      <h2>loading</h2>
    </>
  );
}
