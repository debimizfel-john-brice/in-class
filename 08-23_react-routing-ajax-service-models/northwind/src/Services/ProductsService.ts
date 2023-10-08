import axios from "axios";
import ProductModel from "../Models/ProductsModel";
import appConfig from "../Utils/Config";

class ProductsService {

    public async get_products(): Promise<ProductModel[]> {
        const products = (await axios.get<ProductModel[]>(appConfig.productsUrl)).data;
        return products;
    }
}

const products_service = new ProductsService();
export default products_service;