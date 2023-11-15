class ProductModel{

    // public id:number = 0;
    // public id:number | undefined;
    // public id?:number; // Optional
    // public id!:number; // can be olso undefined

    public id:number; // Set strictNullChecks:flase in tsconfig.json
    public name:string;
    public price:number;
    public stock:number
    public imageUrl:string;
    public image: FileList; // FileList -> collaction of File


    public static nameValidation = { 
        required: {value: true, message: "Missing Name!" },
        minLength: {value: 2, message: "Name too short!" },
        maxLength: { value: 15, message: "Name too long!" }
    }
    
    // Price: required, min --> 1, max --> 100
    public static priceValidation = { 
        required: {value: true, message: "Missing Price!" },
        min: { value: 1, message: "Price must be 1 - 100" },
        max: { value: 100, message: "Price must be 1 - 100" }
    }

    // Stock: required, min --> 0, max --> 1000
    public static stockValidation = { 
        required: {value: true, message: "Missing Stock!" },
        min: {value: 0, message: "Stock cen't be negative" },
        max: { value: 1000, message: "Stock cen't be more then 1000" }
    }



}
export default ProductModel;


