import Joi from "joi";
import { ValidationError } from "./client-errors";
import { UploadedFile } from "express-fileupload";

class ProductModel{

    id: number;
    name: string;
    price: number;
    stock: number;
    imageUrl: string; // Full image url
    image: UploadedFile;

    public constructor( product: ProductModel ){ // Copy constructor
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.stock = product.stock;
        this.imageUrl = product.imageUrl;
        this.image = product.image;
    }

    public static Messages = {
        'number.base': `הערך חייב להיות מספרי`,
        'string.base': `חייב להיות מחרוזת`,
        'string.empty': `חובה למלא את השם`,
        'string.min': `חייב להכיל לפחות {#limit} תווים`,
        'number.min': `{#limit} חייב להיות יותר מ`,
        'any.required': `שדה חובה 'a'`
    }

    public static ValidationSchema = Joi.object({
        id: Joi.number().positive().integer().optional().messages(ProductModel.Messages),
        name: Joi.string().required().min(2).max(100).messages(ProductModel.Messages),
        price: Joi.number().required().min(1).max(10000).messages(ProductModel.Messages),
        stock: Joi.number().required().min(0).max(100000).messages(ProductModel.Messages),
        imageUrl: Joi.optional(),
        image: Joi.optional(),
    });

    public validate():void {
        const result = ProductModel.ValidationSchema.validate(this);
        if( result.error ) throw new ValidationError( result.error.message );
    }

    
}
export default ProductModel;