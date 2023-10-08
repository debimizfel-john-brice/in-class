import { useEffect, useState } from "react";
import "./Products.css";
import products_service from "../../../Services/ProductsService";
import ProductModel from "../../../Models/ProductsModel";
import ProductsCard from "../ProductsCard/ProductsCard";
import { Link } from "react-router-dom";
import Loader from "../../../Tools/Loader/Loader";
import useTitle from "../../../Hooks/useTitle";
import notifyService from "../../../Services/NotifyService";

function Products(): JSX.Element {

    const [products, set_products] = useState<ProductModel[]>([]);

    useTitle("Products");

    useEffect(() => {
        products_service.get_products()
            .then(products => set_products(products))
            .catch(err => notifyService.error(err));
    });

    if (!products.length) return <Loader></Loader>
    return (
        <>
            <div className="Products">
                <Link to="/products/add">Add new product</Link>
                <div>
                    {products.map(p => <ProductsCard key={p.id} product={p}></ProductsCard>)}
                </div>
            </div>
        </>
    );
}

export default Products;
