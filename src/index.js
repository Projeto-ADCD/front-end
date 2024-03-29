import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Formulario from "./components/Formulario/Formulario";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import TelaReceitaUnica from "./components/TelaReceitaUnica/TelaReceitaUnica";
import RenderizaRequest from "./components/RenderizaRequest/RenderizaRequest";
import ListaTodasReceitas from "./components/ListaTodasReceitas/ListaTodasReceitas";
import PesquisaPorNome from "./components/PesquisaNome/PesquisaPorNome";
import RenderizaRequestNome from "./components/RenderizaRequestNome/RenderizaRequestNome";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/Sobre";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="parentDiv">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receita/:id/" element={<TelaReceitaUnica />}></Route>
          <Route path="/pesquisa/filtro" element={<RenderizaRequest />}></Route>
          <Route path="/pesquisa/pesquisanome/" element={<RenderizaRequestNome />}></Route>
          <Route path="/pesquisa" element={<Formulario />}></Route>
          <Route path="/receitas" element={<ListaTodasReceitas />}></Route>
          <Route path="/pesquisa/nome/" element={<PesquisaPorNome />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
