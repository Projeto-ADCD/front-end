import SideBar from "../Sidebar";

import './sobre.css'
export default function Sobre(){
    return <>
    <SideBar></SideBar>
    <div className='classeSobre'>
        <h1>Sobre</h1>
        <h3 className="textoSobre">
            Pesquisar por receitas que contém certos ingredientes e não contém outros pode ser uma tarefa difícil. O nosso MVP propõe um site em que o usuário forneça os ingredientes que ele tem em mãos, e também ingredientes que ele não quer que estejam na receita. Nossa aplicação foca em usuários que estejam em busca de cozinhar algo diferente, porém levando em consideração os ingredientes disponíveis no momento.
        </h3>    
    </div>
    </>
}