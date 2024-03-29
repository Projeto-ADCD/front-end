import { useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom";
import "./Categoria.css";

export default function Categoria() {
    const location = useLocation();
    let tipoOrden = ""

    function pegaEstadoDrop(e) {
        const valu = e.target.value
        let cate;
        switch (valu) {
            case "bolosTortas":
                cate = "BOLOS E TORTAS DOCES";
                break;
            case "carnes":
                cate = "CARNES";
                break;
            case "aves":
                cate = "AVES";
                break;
            case "peixesFrutos":
                cate = "PEIXES E FRUTOS DO MAR";
                break;
            case "saladasMolhos":
                cate = "SALADAS, MOLHOS E ACOMPANHAMENTOS";
                break;
            case "massas":
                cate = "MASSAS";
                break;
            case "bebidas":
                cate = "BEBIDAS";
                break;
            case "doces":
                cate = "DOCES E SOBREMESAS";
                break;
            case "lanches":
                cate = "LANCHES";
                break;
            case "sopas":
                cate = "SOPAS";
                break;
            case "pratoUnico":
                cate = "PRATO ÚNICO";
                break;
            case "light":
                cate = "LIGHT";
                break;
            case "alimentacao":
                cate = "ALIMENTAÇÃO SAUDÁVEL";
                break;
        }
        geraCategoria(cate)
    }

    function geraCategoria(tipoOrden) {
        let link = location.pathname + location.search
        let regex = /&tag=(BOLOS%20E%20TORTAS%20DOCES|CARNES|AVES|PEIXES%20E%20FRUTOS%20DO%20MAR|SALADAS,%20MOLHOS%20E%20ACOMPANHAMENTOS|SOPAS|MASSAS|BEBIDAS|DOCES%20E%20SOBREMESAS|LANCHES|PRATO%20%C3%9ANICO|LIGHT|ALIMENTA%C3%87%C3%83O%20SAUD%C3%81VEL)/
        console.log(regex)
        link = link.replace(regex, "")
        link = link + `&tag=${tipoOrden}`
        window.location.href = link;
    }

    return (
        <div className="categoria">
            <label for="cat">Categoria: </label>
            <select id="receitas" onChange={pegaEstadoDrop} name="cat" size="1">
                <option value="null"></option>
                <option value="bolosTortas">BOLOS E TORTAS DOCES</option>
                <option value="carnes">CARNES</option>
                <option value="aves">AVES</option>
                <option value="peixesFrutos">PEIXES E FRUTOS DO MAR</option>
                <option value="saladasMolhos">SALADAS, MOLHOS E ACOMPANHAMENTOS</option>
                <option value="sopas">SOPAS</option>
                <option value="massas">MASSAS</option>
                <option value="bebidas">BEBIDAS</option>
                <option value="doces">DOCES E SOBREMESAS</option>
                <option value="lanches">LANCHES</option>
                <option value="pratoUnico">PRATO ÚNICO</option>
                <option value="light">LIGHT</option>
                <option value="alimentacao">ALIMENTAÇÃO SAUDÁVEL</option>
            </select>
        </div>
    )
}