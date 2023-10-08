import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import Products from "../../ProductsArea/Products/Products";
import About from "../../AboutArea/About/About";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProductDetail from "../../ProductsArea/ProductDetail/ProductDetail";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />

                <Route path="/products" element={<Products />} />
                <Route path="/products/add" element={<AddProduct />} />
                <Route path="/products/details/:prodID" element={<ProductDetail />} />
                <Route path="/products/edit/:prodID" element={<EditProduct />} />

                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Routing;
