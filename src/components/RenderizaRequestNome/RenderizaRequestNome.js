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
      <TelaLoading></TelaLoading>
    </>
  );
}