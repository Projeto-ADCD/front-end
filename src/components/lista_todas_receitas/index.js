import { useEffect, useState } from "react"
import { receitas } from "../../servico/api";
import Banco from "../listagem_receita";




export default function ListaTodasReceitas() {
  const [dataRender, setDataRender] = useState(undefined);

  useEffect(() => {
    receitas.retornaTodasReceitas().then((data) => {
      console.log(data);
      setDataRender(data);
    })
  },[])

  if(dataRender) {
    return (
      <Banco dataRender={dataRender}></Banco>
    )
  }
  else {
    return (
      <>
        <h1>Loading</h1>
      </>
    )
  }
}