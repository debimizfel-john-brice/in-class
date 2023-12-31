import { OkPacket } from "mysql";
import ProductModel from "../2-models/product_model";
import dal from "../4-utils/dal";
import { ResourceNotFound } from "../2-models/status_model";

// Get all products
async function getAllProducts(): Promise<ProductModel[]> {
    const sql = `SELECT
                    ProductID AS id,
                    ProductName AS name,
                    UnitPrice AS price,
                    UnitsInStock AS stock
                FROM products`;
    const products = await dal.execute(sql);
    return products;
}

// Get one product
async function getOneProduct(id: number): Promise<ProductModel> {
    const sql = `SELECT
                    ProductID AS id,
                    ProductName AS name,
                    UnitPrice AS price,
                    UnitsInStock AS stock
                FROM products
                WHERE ProductID = ${id}`;
    const products = await dal.execute(sql);

    const product = products[0];

    if (!product) throw new ResourceNotFound(id);

    return product;
}

// Add product
async function addProduct(product: ProductModel): Promise<ProductModel> {
    product.validate();
    const sql = `INSERT INTO products(ProductName, UnitPrice, UnitsInStock)
                VALUES('${product.name}', ${product.price}, ${product.stock})`;
    const info: OkPacket = await dal.execute(sql);
    product.id = info.insertId;
    return product;
}

// Update product
async function updateProduct(product: ProductModel): Promise<ProductModel> {
    product.validate();
    const sql = `UPDATE products
                SET ProductName = '${product.name}', UnitPrice = ${product.price}, UnitsInStock = ${product.stock}
                WHERE ProductID = ${product.id}`;
    const info = await dal.execute(sql);
    if (!info.affectedRows) throw new ResourceNotFound(product.id);
    return product;
}

// Delete product
async function deleteProduct(id: number): Promise<void> {
    const sql = `DELETE FROM products WHERE ProductID = ${id}`;
    const info = await dal.execute(sql);
    if (!info.affectedRows) throw new ResourceNotFound(id);

}

// Update partial product
async function updatePartialProduct(product: ProductModel): Promise<ProductModel> {
    const dbproduct = await getOneProduct(product.id);

    for (const prop in dbproduct) {
        if (product[prop] !== undefined) {
            dbproduct[prop] = product[prop];
        }
    }

    await updateProduct(dbproduct);
    return dbproduct;
}

export default {
    getAllProducts,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    updatePartialProduct
}