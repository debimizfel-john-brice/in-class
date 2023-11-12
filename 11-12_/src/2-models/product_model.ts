import { ValidationError } from "./status_model";
import Joi from 'joi';

class ProductModel {
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(product: ProductModel) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.stock = product.stock;
    }

    public static ValidationSchema = Joi.object({
        id: Joi.number().positive().integer().optional(),
        name: Joi.string().min(2).max(100).required(),
        price: Joi.number().min(0).max(500).required(),
        stock: Joi.number().min(0).max(5000).required()
    });

    public validate(): void {
        const result = ProductModel.ValidationSchema.validate(this);
        if (result.error) throw new ValidationError(result.error.message);
    }

}

export default ProductModel;