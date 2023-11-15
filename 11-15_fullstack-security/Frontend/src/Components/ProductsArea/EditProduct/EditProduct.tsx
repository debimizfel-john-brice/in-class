import { useEffect, useState, SyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import "./EditProduct.css";
import ProductModel from "../../../Models/ProductsModel";
import { useNavigate, useParams } from "react-router-dom";
import productsService from "../../../Services/ProductsService";
import { SyntheticExpression } from "typescript";
import notifyService from "../../../Services/NotifyService";

function EditProduct(): JSX.Element {

    const { register, handleSubmit, formState, setValue } = useForm<ProductModel>();
    const navigate = useNavigate();
    const [imageUrl, setImageUrl ] = useState("");
    const params = useParams();

    useEffect(() => {

        const { prodID } = params;
        productsService.getOneProduct(prodID)
        .then( product => {
            setValue("id", product.id ); 
            setValue("name", product.name ); 
            setValue("price", product.price ); 
            setValue("stock", product.stock );
            setImageUrl(product.imageUrl);
        })
        .catch(error => notifyService.error( error ))

    },[]);


    const update = async ( product:ProductModel ) => {
        try {
            await productsService.updateProduct( product );
            notifyService.success("Product has been successfully Updated");
            navigate("/products");
        } catch (error:any) {
            notifyService.error( error );;
        }
    }

    return (

        <div className="EditProduct">

            <form className="box" onSubmit={handleSubmit(update)}>

            <h2>Edit Product</h2>

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
                {imageUrl && <img src={imageUrl} width={60} height={60}/>}
            </div>

            <button>Update</button>

            </form>
			
        </div>
    );
}

export default EditProduct;
