import { NavLink } from "react-router-dom";
import "./Aside.css";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";

function Aside():JSX.Element{

    return (
        <div className="Aside">

            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>

            <TotalProducts />

        </div>
    )

}
export default Aside;