import axios from "axios";
import ProductModel from "../Models/ProductsModel";
import appConfig from "../Utils/Config";
import { store } from "../Redux/Store";
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "../Redux/productsSlice";
import CategoriesModel from "../Models/CategoriesModel";

class ProductsService{


    // Get All Products:
    public async getAllProducts():Promise<ProductModel[]> {

        // Get Products From Global State:
        let products = store.getState().products.productsList;

        if( !products.length ){

            // AJAX Request:
            const response = await axios.get<ProductModel[]>( appConfig.productsUrl );

            // Extract Products:
            products = response.data;

            // Save to Products to the State:
            store.dispatch(fetchProducts(products))
        }
        
        // Return Products:
        return products;

    }

    // Get One Product:
    public async getOneProduct(id:string):Promise<ProductModel>{

        // Get Products From Global State:
        let products = store.getState().products.productsList;

        // Find required product:
        let product = products.find( p => p.id === +id );

        // If we dont have the Product:
        if( !product ){
            
            // AJAX Request:
            const response = await axios.get<ProductModel>( appConfig.productsUrl + id );

            // Extract Product:
            product = response.data;
        }
        // Return Product:
        return product;
    }


    // REST API Methods:
    // GET      get data from server
    // POST     Add new data to server
    // PUT      Edit full object data
    // PATCH    Edit part of object data
    // DELETE   


    // Save One Product:
    public async saveOneProduct( product:ProductModel ):Promise<void>{

        // AJAX Request - Senfing a new product to add, 
        // const response = await axios.post<ProductModel>( appConfig.productsUrl, product ); // sending data without files
        
        const myData = new FormData(); // Can contine strings and / or files.
        myData.append("name", product.name );
        myData.append("price", product.price.toString() );
        myData.append("stock", product.stock.toString() );
        myData.append("image", product.image[0] ); // image = FileList, image[0] = File

        const response = await axios.post<ProductModel>( appConfig.productsUrl, myData ); // sending data with files

        // Extract Product:
        const addedProduct = response.data;

        // Save the new product to the global State:
        store.dispatch( addProduct( addedProduct ));

    }

    public async updateProduct( product: ProductModel ):Promise<void>{

        // AJAX Request:
        const myData = new FormData(); // Can contine strings and / or files.
        myData.append("name", product.name );
        myData.append("price", product.price.toString() );
        myData.append("stock", product.stock.toString() );
        myData.append("image", product.image[0] ); // image = FileList, image[0] = File
        
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, myData);

        // Extract the updated product:
        const updatedProduct = response.data;

        // Save the updated Product to the global State:
        store.dispatch( updateProduct( updatedProduct ));

    }

    public async deleteProduct(id:string):Promise<void>{
        
        // AJAX Request: 
        await axios.delete<void>( appConfig.productsUrl + id );

        // Delete the Deleted product form the Global State:
        store.dispatch( deleteProduct( +id ) );
        
    }


    public async getAllCategories():Promise<CategoriesModel[]>{

        // Send JWT in the specifc request
        // const headers = { Authorization: "Bearer " + store.getState().auth.token }
        // const response = await axios.get<CategoriesModel[]>(appConfig.categoriesUrl, { headers });

        const response = await axios.get<CategoriesModel[]>(appConfig.categoriesUrl);
        const categories = response.data;
        return categories;

    }

}
const productsService = new ProductsService(); // Singleton
export default productsService;




