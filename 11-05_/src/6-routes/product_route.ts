import express, { Request, Response, NextFunction } from "express";
import products_service from "../5-services/products_service";
import ProductModel from "../2-models/product_model";

const router = express.Router();

router.get('/api/products', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await products_service.getAllProducts();
        res.json(product);
    } catch (error: any) {
        next(error);
    }
});

router.get('/api/products/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = +req.params.id;
        const product = await products_service.getOneProduct(id);
        res.json(product);
    } catch (error: any) {
        console.log(error);

        next(error);
    }
});

router.post('/api/products', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = new ProductModel(req.body);
        const addedProduct = await products_service.addProduct(product);
        res.status(201).json(addedProduct);
    } catch (error: any) {
        next(error);
    }
});

router.put('/api/products/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body.id = +req.params.id;
        const product = new ProductModel(req.body);
        const updatedProduct = await products_service.updateProduct(product);
        res.json(updatedProduct);
    } catch (error: any) {
        next(error);
    }
});


router.delete('/api/products/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = +req.params.id;
        await products_service.deleteProduct(id);
        res.sendStatus(204);
    } catch (error: any) {
        next(error);
    }
});

export default router;

