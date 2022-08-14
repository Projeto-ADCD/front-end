import SideBar from "../Sidebar";
import img_teste from "./loading.svg"
import './carregar.css'

export default function TelaLoading(){
    return (
        <>
        <SideBar />
        <div className="loading_container">
            <img className="loading" src={img_teste} alt="loading" />
        </div>
        </>
        )
}