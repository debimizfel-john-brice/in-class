import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import "./Header.css";


function Header():JSX.Element{
    return (
        <div className="Header">
            <span></span>
            <h1>Northwind</h1>
            <AuthMenu />
        </div>
    )
}
export default Header;