import axios from "axios";
import ProductModel from "../Models/ProductsModel";
import appConfig from "../Utils/Config";

class ProductsService {

    public async get_products(): Promise<ProductModel[]> {
        const products = (await axios.get<ProductModel[]>(appConfig.productsUrl)).data;
        return products;
    }

    public async get_one_product(id: string): Promise<ProductModel> {
        const product = (await axios.get<ProductModel>(appConfig.productsUrl + id)).data;
        return product;
    }

    public async save_one_product(product: ProductModel): Promise<void> {

        const my_data = new FormData();
        my_data.append("name", product.name);
        my_data.append("price", product.price.toString());
        my_data.append("stock", product.stock.toString());
        my_data.append("image", product.image[0]);


        const new_prouct = (await axios.post<ProductModel>(appConfig.productsUrl, my_data)).data;

    }

    public async update_product(product: ProductModel): Promise<void> {
        const my_data = new FormData();
        my_data.append("name", product.name);
        my_data.append("price", product.price.toString());
        my_data.append("stock", product.stock.toString());
        my_data.append("image", product.image[0]);

        const new_prouct = (await axios.put<ProductModel>(appConfig.productsUrl + product.id, my_data)).data;

    }

    public async delete_product(id: string): Promise<void> {
        await axios.delete<void>(appConfig.productsUrl + id);
    }
}

const products_service = new ProductsService();
export default products_service;