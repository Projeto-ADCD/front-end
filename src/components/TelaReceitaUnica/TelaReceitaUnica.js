import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ReceitaUnica from "../ReceitaUnica/ReceitaUnica";
import SideBar from "../Sidebar/index";
import { receita_id } from "../../servico/api";

import TelaLoading from "../TelaCarregamento/TelaCarregamento";
export default function TelaReceitaUnica() {
  const [data, setData] = useState(undefined);
  let params = useParams();
  let id = params.id;

  useEffect(() => {
    receita_id.buscaReceita(id).then((data) => {
      data.recipe_json = JSON.parse(data.recipe_json);
      setData(data);
    });
  }, []);

  if (!data) {
    return (
      <>
        <TelaLoading></TelaLoading>
      </>
    );
  } else {
    return (
      <>
        <SideBar></SideBar>
        <ReceitaUnica receita_unica={data}></ReceitaUnica>
      </>
    );
  }
}
