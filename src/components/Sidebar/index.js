import "./Painel.css";

export default function SideBar() {
  return (
    <>
      <div className="SideBarMatheus">
        <h2 className="tituloSite">Tasteful Receitas</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/receitas">Receitas</a>
          </li>
          <li>
            <a href="/pesquisa">Pesquisa</a>
          </li>
          <li>
            <a href="/pesquisa/nome">Buscar Receita</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
        </ul>
      </div>
    </>
  );
}
