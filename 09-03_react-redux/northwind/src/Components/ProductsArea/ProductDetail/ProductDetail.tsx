import { Link, useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css';
import { useEffect, useState } from 'react';
import products_service from '../../../Services/ProductsService';
import ProductModel from '../../../Models/ProductsModel';

function ProductDetail(): JSX.Element {

    const params = useParams();
    const [product, set_product] = useState<ProductModel>();

    useEffect(() => {
        const id = params.prodID; // lo que vuelve de params es  stirng
        products_service.get_one_product(id).then(p => set_product(p)).catch(err => alert(err.message));
    }, []);

    const naviagate = useNavigate();

    async function delete_product():Promise<void> {
        try {
            await products_service.delete_product(params.prodID);
            alert("Product deleted");
            naviagate("/products");
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <div className="ProductDetail">
            <div className='box'>
                {product &&
                    <>
                        {/* <h1>{product?.name}</h1> */}
                        <h3>Name: {product.name}</h3>
                        <h3>Price: {product.price}$</h3>
                        <h3>Stock: {product.stock}</h3>
                        <img src={product.imageUrl} alt="product-img" />
                        <br /><br />


                    </>
                }

                <br /><br />
                <button onClick={delete_product}> 🚮 Delete</button>
                <br />
                <Link to={"/products/edit/" + product?.id}>Edit</Link>
            </div>
            <Link to="/products">Back</Link>

        </div>
    );
}

export default ProductDetail;
