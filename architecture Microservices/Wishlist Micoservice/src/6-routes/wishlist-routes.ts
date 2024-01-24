import express, { NextFunction, Request, Response } from "express"
import wishlistService from "../5-services/wishlist-service";

// Create Router:
const router = express.Router(); // Capital R

// GET http://localhost:4000/api/wishlist
router.get("/", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const wishlistItems = await wishlistService.getWishlistItems();
        response.json(wishlistItems);
    } catch (error) {
        next(error)
    }
})


export default router;