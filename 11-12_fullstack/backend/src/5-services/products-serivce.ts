import { OkPacket } from "mysql";
import ProductModel from "../2-models/product-model";
import dal from "../4-utils/dal";
import { ResourceNotFoundError } from "../2-models/client-errors";
import appConfig from "../4-utils/app-config";
import fileHandler from "../4-utils/file-handler";


// Get all products from database:
async function getAllProducts():Promise<ProductModel[]>{

    // Create query:
    const sql = `SELECT
                    ProductID AS id,
                    ProductName AS name,
                    UnitPrice AS price,
                    UnitsInStock AS stock,
                    CONCAT('${appConfig.imagesUrl}', ImageName) AS imageUrl
                FROM products`;

    // Get all products:
    const products = await dal.execute(sql);

    // Return them:
    return products;
}


// Get one product:
async function getOneProduct(id:number):Promise<ProductModel>{

    // Create query:
    const sql = `SELECT
                    ProductID AS id,
                    ProductName AS name,
                    UnitPrice AS price,
                    UnitsInStock AS stock,
                    CONCAT('${appConfig.imagesUrl}', ImageName) AS imageUrl
                FROM products WHERE ProductID = ${id}`;
    
    // Get products:
    const products = await dal.execute(sql);

    // Take first product:
    const product = products[0];

    // If resource not found
    if( !product ) throw new ResourceNotFoundError(id);

    // Return thet product:
    return product;

}

// Add product:
async function addProduct(product:ProductModel):Promise<ProductModel>{

    // validation:
    product.validate();

    let imageName = null;

    // Check if there is a image:
    if( product.image ){
        
        // Save image:
        imageName = await fileHandler.saveImage(product.image);

        // Set Back image url:
        product.imageUrl = appConfig.imagesUrl + imageName;

    }
    
    // Create query:
    const sql = `INSERT INTO products(ProductName, UnitPrice, UnitsInStock, ImageName) 
                    VALUES('${product.name}', ${product.price}, ${product.stock}, '${imageName}' )`;

    // Execute:
    const result:OkPacket = await dal.execute(sql);

    // Set back the created id to the product:
    product.id = result.insertId;

    // Delete the image object before return:
    delete product.image;

    // Return thet product:
    return product;

}


// Update product:
async function updateProduct(product:ProductModel):Promise<ProductModel>{

    // validation:
    product.validate();

    // Get original product image name:
    let imageName = await getProductImageName(product.id);

    // Check if there is a image:
    if( product.image ){
        
        // Save image:
        imageName = await fileHandler.updateImage( product.image, imageName );

        // Set Back image url:
        product.imageUrl = appConfig.imagesUrl + imageName;

    }

    // Create query:
    const sql = `UPDATE products SET
                    ProductName = '${product.name}',
                    UnitPrice = ${product.price},
                    UnitsInStock = ${product.stock},
                    ImageName = '${imageName}'
                WHERE ProductID = ${product.id}`

    // Execute:
    const result:OkPacket = await dal.execute(sql);

    // If resource not found:
    if( !result.affectedRows ) throw new ResourceNotFoundError(product.id);

    // Delete the image object before return:
    delete product.image;

    // Return:
    return product;

}

// Update partial product:
async function updatePartialProduct(product:ProductModel):Promise<ProductModel>{

    // Get original object form the db:
    const dbProduct = await getOneProduct(product.id);

    // update only given fields:
    for( const prop in product ){
        if( product[prop] !== undefined ){
            dbProduct[prop] = product[prop];
        }
    }

    // Update back to db:
    await updateProduct(dbProduct);

    // Return:
    return dbProduct


}

// Delete product:
async function deleteProduct(id:number):Promise<void>{

    // Get image name:
    const imageName = await getProductImageName(id);

    // Create query:
    const sql = `DELETE FROM products WHERE ProductID = ${id}`;

    // Execute:
    const result = await dal.execute(sql);

    // If resource not found:
    // if( result.affectedRows === 0 ) throw new ResourceNotFoundError(id);
    if( !result.affectedRows ) throw new ResourceNotFoundError(id);

    // Delete image:
    await fileHandler.deleteImage(imageName);

}

// Get image name
async function getProductImageName(id:number):Promise<string>{

    // Create query:
    const sql = `SELECT ImageName AS imageName FROM products WHERE ProductID = ${id}`;

    // Get products:
    const products = await dal.execute(sql);

    // Extract first product:
    const product = products[0];

    // If is not found:
    if( !product ) throw new ResourceNotFoundError(id);

    // Get image name:
    const imageName = product.imageName;

    // return name:
    return imageName;

}


export default {
    getAllProducts,
    getOneProduct,
    addProduct,
    updateProduct,
    updatePartialProduct,
    deleteProduct
}