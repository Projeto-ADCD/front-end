import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { adcd } from "../../servico/api";
import Banco from "../listagem_receita";


export default function RenderizaRequest(){
  const [searchParams] = useSearchParams();
  let ingreds = (searchParams.get('ingredientes') ? searchParams.get('ingredientes') : "").split(',');
  let not_ingreds = (searchParams.get('not_ingredientes') ? searchParams.get('not_ingredientes') : "").split(',');

  const [dataRender, setDataRender] = useState(undefined);

  useEffect(() => {
    console.log(ingreds,not_ingreds)
    adcd.buscaIngredientes(ingreds,not_ingreds).then((data) => {
      console.log(data);
      setDataRender(data);
    })
  },[])

  if(dataRender){
    return (
      <Banco dataRender={dataRender}></Banco>
    )
  }
  return (
    <>
      <h2>loading</h2>
    </>
  )
}