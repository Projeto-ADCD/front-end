import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Painel from "./components/Sidebar/Painel";
import Formulario from "./components/formulario/Formulario";
import ReceitaUnica from "./components/receita_unica/index";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import TelaReceitaUnica from "./components/tela_receita_unica/index";
import RenderizaRequest from "./components/renderiza_request";
import ListaTodasReceitas from "./components/lista_todas_receitas";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="parentDiv">
        <Routes>
          <Route path="/" element={<Formulario />} />
          {/* <Route
            path="/receitas"
            element={<BancoReceitas listagem_receita={data} />}
          /> */}
          <Route path="/receita/:id/" element={<TelaReceitaUnica />}></Route>
          <Route path="/pesquisa/filtro" element={<RenderizaRequest />}></Route>
          <Route path = "/pesquisa" element = { <Formulario /> }></Route>
          <Route path = "/receitas" element = { <ListaTodasReceitas /> }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
