import "./Painel.css";

export default function SideBar() {
  return (
    <>
      <div className="SideBarMatheus">
        <h2 className="tituloSite">Tasteful Receitas</h2>
        <ul>
        <a href="/"><li>Home</li></a>
        <a href="/receitas?page=0"><li>Receitas</li></a>
        <a href="/pesquisa"><li className="deixaPequeno">Filtrar Ingredientes</li></a>
        <a href="/pesquisa/nome"><li>Buscar Receita</li></a>
        <a href="/sobre"><li>Sobre</li></a>
        </ul>
      </div>
    </>
  );
}
