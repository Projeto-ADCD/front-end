import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { receitas } from "../../servico/api";
import Banco from "../ListagemReceita";

export default function ListaTodasReceitas() {
  const [dataRender, setDataRender] = useState(undefined);
  const [searchParams] = useSearchParams();
  let page = searchParams.get("page")
      ? searchParams.get("page")
      : "";

  useEffect(() => {
    receitas.retornaTodasReceitas(page).then((data) => {
      setDataRender(data);
    });
  }, []);

  if (dataRender) {
    return <Banco dataRender={dataRender}></Banco>;
  } else {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }
}
