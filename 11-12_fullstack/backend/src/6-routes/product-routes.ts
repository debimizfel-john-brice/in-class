import express, { NextFunction, Request, Response } from "express"
import productsSerivce from "../5-services/products-serivce";
import ProductModel from "../2-models/product-model";
import fileHandler from "../4-utils/file-handler";
import verifyLoggedIn from "../3-middleware/verify-logged-in";
import verifyAdmin from "../3-middleware/verify-admin";


// Create Router:
const router = express.Router(); // Capital R 


// GET http://localhost:4000/api/products/
// router.get("/", consoleLogger, async (request: Request, response: Response, next:NextFunction ) => {
router.get("/", verifyLoggedIn, async (request: Request, response: Response, next:NextFunction ) => {

    try{

        // Get all products:
        const products = await productsSerivce.getAllProducts();

        // Response back:
        response.json( products );

    }catch(err:any){
        next(err);
    }
    
});


// GET http://localhost:4000/api/products/:id
router.get("/:id([0-9]+)", verifyLoggedIn, async (request: Request, response: Response, next:NextFunction  ) => {

    try{

        // Extract the id from the route:
        const id = +request.params.id;

        // Get that product:
        const product = await productsSerivce.getOneProduct(id);

        // Response back:
        response.json(product);

    }catch(err:any){
        next(err);
    }

})



// POST http://localhost:4000/api/products
router.post("/", verifyAdmin, async (request: Request, response: Response, next:NextFunction  ) => {

    try{

        // Take image if exist:
        request.body.image = request.files?.image;

        // Extract the product from the body of the request:
        const product = new ProductModel(request.body);

        // Add it to the database:
        const addedProduct = await productsSerivce.addProduct(product);

        // Response back:
        response.status(201).json( addedProduct );

    }catch(err:any){
        next(err);
    }

});


// PUT http://localhost:4000/api/products/:id
router.put("/:id([0-9]+)", verifyAdmin, async (request: Request, response: Response, next:NextFunction  ) => {

    try{

        // Take route id into the body:
        request.body.id = +request.params.id;

        // Take image if exist:
        request.body.image = request.files?.image;

        // Extract the product from the body of the request:
        const product = new ProductModel(request.body);

        // Update product in the database:
        const updatedProduct = await productsSerivce.updateProduct(product);

        // Response back:
        response.json( updatedProduct );

    }catch(err:any){
        next(err);
    }

});

// PATCH http://localhost:4000/api/products/:id
router.patch("/:id([0-9]+)", verifyAdmin, async (request: Request, response: Response, next:NextFunction  ) => {

    try{

        // Take route id into the body:
        request.body.id = +request.params.id;

        // Extract the product from the body of the request:
        const product = new ProductModel(request.body);

        // Update product in the database:
        const updatedProduct = await productsSerivce.updatePartialProduct(product);

        // Response back:
        response.json( updatedProduct );

    }catch(err:any){
        next(err);
    }

});



// DELETE http://localhost:4000/api/products/:id
router.delete("/:id([0-9]+)", verifyAdmin, async (request: Request, response: Response, next:NextFunction  ) => {

    try{

        // Extract the id from the route:
        const id = +request.params.id;

        // Delete product from the database:
        await productsSerivce.deleteProduct(id);

        // Response back:
        response.sendStatus(204);

    }catch(err:any){
        next(err);
    }

});


// GET http://localhost:4000/api/products/images/:imageName
router.get("/images/:imageName", async (request: Request, response: Response, next:NextFunction ) => {

    try{

        // Take image name form the Route:
        const imageName = request.params.imageName;

        // Get the full path to the image in the fs
        const imagePath = fileHandler.getImagePath(imageName);

        // Send Back the file to the client:
        response.sendFile( imagePath );

    }catch(err:any){
        next(err);
    }
    
});


export default router;