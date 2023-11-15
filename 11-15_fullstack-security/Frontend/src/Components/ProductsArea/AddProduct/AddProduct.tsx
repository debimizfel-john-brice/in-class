import "./AddProduct.css";
import { useForm } from "react-hook-form";
import ProductModel from "../../../Models/ProductsModel";
import productsService from "../../../Services/ProductsService";
import { useNavigate } from "react-router-dom";
import useVerifyLoggedIn from "../../../Hooks/useVerifyLoggedIn";
import useTitle from "../../../Hooks/useTitle";
import notifyService from "../../../Services/NotifyService";


function AddProduct(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<ProductModel>();
    const navigate = useNavigate()
    
    // useVerifyLoggedIn();
    useTitle("Add Product");

    const save = async ( product:ProductModel ) => {

        try {
            
            await productsService.saveOneProduct( product );
            notifyService.success("Product has been successfully Added");
            navigate("/products");

        } catch (error:any) {
            notifyService.error( error );;
        }

    }


    return (
        <div className="AddProduct">
			
            <form className="box" onSubmit={handleSubmit(save)}>

                <h2>Add Product</h2>

                <div className="form-control">
                    <label>Name:</label>
                    <input type="text" { ...register("name", ProductModel.nameValidation )} />
                    <span className="err"> { formState.errors.name?.message } </span>
                </div>

                <div className="form-control">
                    <label>Price:</label>
                    <input type="number" {...register("price", ProductModel.priceValidation )}/>
                    <span className="err"> { formState.errors.price?.message } </span>
                </div>

                <div className="form-control">
                    <label>Stock:</label>
                    <input type="number" {...register("stock", ProductModel.stockValidation)}/>
                    <span className="err"> { formState.errors.stock?.message } </span>
                </div>

                <div className="form-control">
                    <label>Image:</label>
                    <input type="file" accept="image/*" {...register("image")} />
                </div>

                <button>Save</button>

            </form>

        </div>
    );
}

export default AddProduct;
