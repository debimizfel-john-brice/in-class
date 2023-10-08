class ProductModel {

    // set strictNullChecks: false in tsconfig.json

    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageUrl: string;
    public image: FileList;


    public static name_validation = {
        required: { value: true, message: "Please enter a name" },
        minLength: { value: 2, message: "Name is too short" },
        maxLength: { value: 15, message: "Name is too long" }
    };

    public static price_validation = {
        required: { value: true, message: "Please enter a price" },
        min: { value: 1, message: "Price must be 1 - 100" },
        max: { value: 100, message: "Price must be 1 - 100" }
    };

    public static stock_validation = {
        required: { value: true, message: "Please enter a stock" },
        min: { value: 0, message: "Stock must be 0 - 1000" },
        max: { value: 1000, message: "Stock must be 0 - 1000" }
    };
}

export default ProductModel;