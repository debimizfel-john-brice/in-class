import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import productsService from "../../../Services/ProductsService";
import ProductModel from "../../../Models/ProductsModel";
import { Link } from "react-router-dom";
import notifyService from "../../../Services/NotifyService";

function ProductDetails(): JSX.Element {

    // const [product, setProduct ] = useState<ProductModel>( new ProductModel() );
    const [product, setProduct ] = useState<ProductModel>();
    const params = useParams();
    const navigate = useNavigate();
    const { prodID } = params;

    useEffect(() => {
        
        productsService.getOneProduct(prodID)
        .then(p => setProduct(p))
        .catch( error => notifyService.error( error ))

    } ,[]);

    const deleteProduct = async () => {
        try {
            await productsService.deleteProduct(prodID);
            notifyService.success("Product has been successfully Deleted");
            navigate("/products");
        } catch (error:any) {
            notifyService.error( error );
        }
    }

    return (
        <div className="ProductDetails">
            <div className="box">
                { product && 
                    <>
                        {/* <h1>{ product && product.name }</h1> */}
                        {/* <h1>{ product?.name }</h1> */}
                        <h3>Name: {product.name} </h3>
                        <h3>Price: {product.price} </h3>
                        <h3>Stock: {product.stock} </h3>
                        <img src={product.imageUrl} alt="" />
                    </>
                }
                <br />
                <br />
                <button onClick={deleteProduct}>🚮 Delete</button>
                <br />
                <Link to={"/products/edit/" + product?.id }>Edit</Link>
            </div>
            
            <Link to="/products">Back</Link>

        </div>
    );
}

export default ProductDetails;
