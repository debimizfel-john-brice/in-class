class ProductModel {

    // set strictNullChecks: false in tsconfig.json

    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageUrl: string;
}

export default ProductModel;