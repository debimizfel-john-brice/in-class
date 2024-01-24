import express, { NextFunction, Request, Response } from "express"
import productsSerivce from "../5-services/products-serivce";

// Create Router:
const router = express.Router(); // Capital R 

// GET http://localhost:4000/api/products/search/:text
router.get("/search/:text", async (request: Request, response: Response, next: NextFunction  ) => {
    try{
        const text = request.params.text;
        const product = await productsSerivce.searchProducts(text);
        response.json(product);
    } catch (error) {
        next(error)
    }
})


export default router;