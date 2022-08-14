import home from "../../imgs/salada-de-legumes-com-alimentos-fatiados-e-picados-e-um-livro-de-receitas-a-parte_114579-19557.webp";
import SideBar from "../Sidebar";
import "./Home.css"

export default function Home() {
  return (
    <>
      <SideBar></SideBar>
      <img src={home} className="imageHome"></img>
    </>
  )
}