import { useEffect, useState } from "react";
import "./Products.css";
import products_service from "../../../Services/ProductsService";
import ProductModel from "../../../Models/ProductsModel";
 
function Products(): JSX.Element {

    const [products, set_products] = useState<ProductModel[]>([]);

    useEffect(() => {
        products_service.get_products()
            .then(products => set_products(products))
            .catch(err => alert(err));
    });

    return (
        <>
            <div className="Products">
                {
                    products.map(product => <><span key={product.id}> {product.name} -- {product.price}$ | </span></>)
                }
            </div>
        </>
    );
}

export default Products;
