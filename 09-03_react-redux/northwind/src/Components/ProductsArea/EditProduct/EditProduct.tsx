import { useForm } from 'react-hook-form';
import './EditProduct.css';
import ProductModel from '../../../Models/ProductsModel';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import products_service from '../../../Services/ProductsService';

function EditProduct(): JSX.Element {
    const { register, handleSubmit, formState, setValue } = useForm<ProductModel>();
    const naviagate = useNavigate();

    const params = useParams();
    useEffect(() => {

        const { prodID } = params;
        products_service.get_one_product(prodID)
            .then(product => {
                setValue("id", product.id);
                setValue("name", product.name);
                setValue("price", product.price);
                setValue("stock", product.stock);
            })
            .catch(err => alert(err.message));

    });

    async function update(product: ProductModel) {
        try {
            await products_service.update_product(product);
            alert("Product updated");
            naviagate("/products");
        } catch (error: any) {
            alert(error.message);
        }
    }


    return (
        <div className="EditProduct">
            <form className="box" onSubmit={handleSubmit(update)}>
                <h2>Edit product</h2>

                <div className="input-control">
                    <label>Name:</label>
                    <input type="text" {...register("name", ProductModel.name_validation)} />
                    <span className='err'>{formState.errors.name?.message}</span>
                </div>

                <div className="input-control">
                    <label>Price:</label>
                    <input type="number" {...register("price", ProductModel.price_validation)} />
                    <span className='err'>{formState.errors.price?.message}</span>
                </div>

                <div className="input-control">
                    <label>Stock:</label>
                    <input type="number" {...register("stock", ProductModel.stock_validation)} />
                    <span className='err'>{formState.errors.stock?.message}</span>
                </div>

                <label>Image:</label>
                <input type="file" accept="image/*" {...register("image")} />

                <button>Save</button>
            </form>
        </div>
    );
}

export default EditProduct;
