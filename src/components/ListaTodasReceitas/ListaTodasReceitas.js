import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { receitas } from "../../servico/api";
import Banco from "../ListagemReceita/ListagemReceita";
import TelaLoading from "../TelaCarregamento/TelaCarregamento";

export default function ListaTodasReceitas() {
  const [dataRender, setDataRender] = useState(undefined);
  const [searchParams] = useSearchParams();
  let page = searchParams.get("page")
      ? searchParams.get("page")
      : "";
  let paramOrdem = searchParams.get("paramOrdem") ?
      searchParams.get("paramOrdem") : "";
    
  let ascending = searchParams.get("ascending") ?
      searchParams.get("ascending") : "";

  useEffect(() => {
    receitas.retornaTodasReceitas(page, paramOrdem,ascending).then((data) => {
      setDataRender(data);
    });
  }, []);

  if (dataRender) {
    return <Banco dataRender={dataRender}></Banco>;
  } else {
    return (
      <>
        <TelaLoading></TelaLoading>
      </>
    );
  }
}
