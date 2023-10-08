import axios from "axios";
import ProductModel from "../Models/ProductsModel";
import appConfig from "../Utils/Config";
import { store } from "../Redux/Store";
import { addProduct, deleteProduct, fethcProducts, updateProduct } from "../Redux/ProductsSlice";

class ProductsService {

    public async get_products(): Promise<ProductModel[]> {

        let products = store.getState().products.productsList;

        if (!products.length) {
            products = (await axios.get<ProductModel[]>(appConfig.productsUrl)).data;
            store.dispatch(fethcProducts(products))
        }

        return products;
    }

    public async get_one_product(id: string): Promise<ProductModel> {
        let products = store.getState().products.productsList;
        let product = products.find(p => p.id === +id);

        if (!product) { //??
            product = (await axios.get<ProductModel>(appConfig.productsUrl + id)).data;
        }

        return product;
    }

    public async save_one_product(product: ProductModel): Promise<void> {

        const my_data = new FormData();
        my_data.append("name", product.name);
        my_data.append("price", product.price.toString());
        my_data.append("stock", product.stock.toString());
        my_data.append("image", product.image[0]);


        const new_prouct = (await axios.post<ProductModel>(appConfig.productsUrl, my_data)).data;
        store.dispatch(addProduct(new_prouct));
    }

    public async update_product(product: ProductModel): Promise<void> {
        const my_data = new FormData();
        my_data.append("name", product.name);
        my_data.append("price", product.price.toString());
        my_data.append("stock", product.stock.toString());
        my_data.append("image", product.image[0]);

        const product_updated = (await axios.put<ProductModel>(appConfig.productsUrl + product.id, my_data)).data;

        store.dispatch(updateProduct(product_updated));
    }

    public async delete_product(id: string): Promise<void> {
        await axios.delete<void>(appConfig.productsUrl + id);
        store.dispatch(deleteProduct(+id));
    }
}

const products_service = new ProductsService();
export default products_service;

