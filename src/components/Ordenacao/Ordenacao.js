import { useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom";

export default function Ordenacao() {
    const location = useLocation();
    let tipoOrden = ""
    let ordem = ""

    function pegaEstadoDrop(e) {
        const valu = e.target.value
        if(valu === "menosPorc"){
            tipoOrden = "porcao"
            ordem = "true"
        }else if(valu === "maisPorc"){
            tipoOrden = "porcao"
            ordem = "false"
        }else if(valu === "menosTempo"){
            tipoOrden = "tempo"
            ordem = "true"
        }else if(valu === "maisTempo"){
            tipoOrden = "tempo"
            ordem = "false"
        } 
        geraOrdena(tipoOrden,ordem)
    }

    function geraOrdena(tipoOrden,ordem) {
        let link = location.pathname + location.search
        let regex = /&paramOrdem=(tempo|porcao)&ascending=(true|false)/
        link = link.replace(regex,"")
        link = link + `&paramOrdem=${tipoOrden}&ascending=${ordem}`
        window.location.href = link;
      }

    return (
        <div className="ordenacao">
            <label for="order">Ordena Por: </label>
            <select id="receitas" onChange={pegaEstadoDrop} name="order" size="1">
                <option value="null"></option>
                <option value="menosPorc">Gera menos porçoes</option>
                <option value="maisPorc">Gera mais porçoes</option>
                <option value="menosTempo">Demora menos tempo</option>
                <option value="maisTempo">Demora mais tempo </option>
            </select>
        </div>
    )
}

