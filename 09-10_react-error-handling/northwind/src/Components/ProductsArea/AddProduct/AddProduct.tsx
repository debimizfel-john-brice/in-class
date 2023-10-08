import { useForm } from 'react-hook-form';
import './AddProduct.css';
import ProductModel from '../../../Models/ProductsModel';
import products_service from '../../../Services/ProductsService';
import { useNavigate } from 'react-router-dom';
import useVerifyLogin from '../../../Hooks/useVerifyLogin';
import useTitle from '../../../Hooks/useTitle';
import notifyService from '../../../Services/NotifyService';

function AddProduct(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<ProductModel>();
    const naviagate = useNavigate();

    // useVerifyLogin();

    useTitle("Add Products");

    async function save(product: ProductModel) {
        try {
            await products_service.save_one_product(product);
            notifyService.success("Product added");
            naviagate("/products");
        } catch (error: any) {
            notifyService.error(error);
        }
    }

    return (
        <div className="AddProduct">
            <form className="box" onSubmit={handleSubmit(save)}>
                <h2>Add product</h2>

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

export default AddProduct;
