import React from "react";
import ReactDOM from "react-dom/client";

import Painel from "./components/Sidebar/Painel";
import Formulario from "./components/formulario/Formulario";
import BancoReceitas from "./components/listagem_receita/index";
import ReceitaUnica from "./components/receita_unica/index";

import { data } from "./components/listagem_receita/constante";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Painel />

    <Formulario />*/}
    <BancoReceitas listagem_receita={data} />

    {/* <ReceitaUnica receita_unica={data[2]} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
