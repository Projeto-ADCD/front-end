import SideBar from "../Sidebar";
import './sobre.css'



export default function Sobre(){
    return <>
    <SideBar></SideBar>
    <div className='classeSobre'>
        <h1>Sobre</h1>
        <div className="textoSobre">
            <h3 >
                Pesquisar por receitas que contém certos ingredientes e não contém outros pode ser uma tarefa difícil. O nosso MVP propõe um site em que o usuário forneça os ingredientes que ele tem em mãos, e também ingredientes que ele não quer que estejam na receita. Nossa aplicação foca em usuários que estejam em busca de cozinhar algo diferente, porém levando em consideração os ingredientes disponíveis no momento.
            </h3>    
            <h3>
                Essa aplicação é resultado do projeto da disciplina de Projeto em computação I - Universidade Federal de Campina Grande
            </h3>
            <h3>
                As receitas foram coletadas do site <a href="https://www.tudogostoso.com.br/">Tudo Gostoso</a>. Nosso projeto não tem fins lucrativos. Foi feito exclusivamente para a disciplina.
            </h3>

            <h6>- Assinado: Uhs ThOpzinhes™</h6>
        </div>
    </div>
    </>
}