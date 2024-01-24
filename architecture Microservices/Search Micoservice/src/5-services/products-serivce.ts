import axios from "axios";
import { IProductModel, ProductModel } from "../2-models/product-model";
import queueService from "./queue-service";


// Serch Products by name:
async function searchProducts(name: string): Promise<IProductModel[]> {
    const regex = new RegExp(`${name}`, 'i');
    const products = await ProductModel.find(
        { name: { $regex: regex } },
        ["name", "price", "stock"],
        { sort: { price: 1 } }
    ).exec();

    // Save to wishlist if not found products:
    if (products.length === 0) {
        // TODO: Save to wishlist:
        // await axios.post('http://localhost:4002/api/wishlist', { name });
        await queueService.sendToQueue("", name);
    }

    return products;
}


export default {
    searchProducts
}