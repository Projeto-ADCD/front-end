import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Painel from "./components/Sidebar/Painel";
import Formulario from "./components/formulario/Formulario";
import BancoReceitas from "./components/listagem_receita/index";
import ReceitaUnica from "./components/receita_unica/index";
import {
  Route,
  Routes,
} from "react-router-dom";

import { data } from "./components/listagem_receita/constante";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Formulario />} />
        <Route path="/receitas" element={<BancoReceitas listagem_receita={data} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
