import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ReceitaUnica from "../receita_unica/index";
import SideBar from "../Sidebar/index";
import { receita_id } from "../../servico/api";

export default function TelaReceitaUnica() {
  const [data, setData] = useState(undefined);
  let params = useParams();
  let id = params.id;
  const { REACT_APP_URL_BACKEND } = process.env;

  useEffect(() => {
    receita_id.buscaReceita(id).then((data) => {
      data.recipe_json = JSON.parse(data.recipe_json);
      setData(data);
    });
  }, []);

  if (!data) {
    return (
      <>
        <h2>Loading</h2>
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
