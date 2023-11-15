import { Link } from "react-router-dom";
import ProductModel from "../../../Models/ProductsModel";
import "./ProductsCard.css";

interface ProductsCardProps {
	product:ProductModel
}

function ProductsCard(props: ProductsCardProps): JSX.Element {

    // const product = props.product;
    const { product } = props;

    return (
        <div className="ProductsCard box">
			
            <div>
                <p><b>Name:</b> {product.name}</p>
                <p><b>Price:</b> {product.price}$</p>
                <p><b>Stock:</b> {product.stock}</p>
            </div>

            <div>
                <Link to={ "/products/details/" + product.id } >
                    <img src={product.imageUrl} alt="product-image" />
                </Link>
            </div>

        </div>
    );
}

export default ProductsCard;
