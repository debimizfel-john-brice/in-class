import { Link } from "react-router-dom";
import ProductModel from "../../../Models/ProductsModel";
import productsService from "../../../Services/ProductsService";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./Products.css";
import { useEffect, useState } from "react";
import Loader from "../../ToolsArea/Loader/Loader";
import useTitle from "../../../Hooks/useTitle";
import notifyService from "../../../Services/NotifyService";

function Products(): JSX.Element {

    const [products, setProducts ] = useState<ProductModel[]>([]);

    useTitle("Products");

    useEffect(() => {
        productsService.getAllProducts()
        .then( products => setProducts( products ))
        .catch( error => notifyService.error( error ) )
    } ,[]);

    if( !products.length ) return <Loader />

    return (
        <div className="Products">
            <Link to="/products/add">➕ Add New Product</Link>
            <div>
                { products.map( p => <ProductsCard key={p.id} product={p}/> ) }
            </div>
        </div>
    );
}

export default Products;
