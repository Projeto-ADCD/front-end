import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Painel from "./components/Sidebar/Painel";
import Formulario from "./components/Formulario/Formulario";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import TelaReceitaUnica from "./components/TelaReceitaUnica/index";
import RenderizaRequest from "./components/RenderizaRequest";
import ListaTodasReceitas from "./components/ListaTodasReceitas";
import PesquisaPorNome from "./components/PesquisaNome";

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
          <Route path="/pesquisa" element={<Formulario />}></Route>
          <Route path="/receitas" element={<ListaTodasReceitas />}></Route>
          <Route path="/pesquisa/nome/" element={<PesquisaPorNome />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
