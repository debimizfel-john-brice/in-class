import { NextFunction, Request, Response } from "express";

function banProducts(req: Request, res: Response, next: NextFunction) {
    if (isWeekend()) {
        res.status(403).send("No products on weekends!");
        return;
    }
    else {
        next();
    }
}

function isWeekend() {
    // return true;
    const today = new Date();
    return today.getDay() === 5 || today.getDay() === 6;
}

export default banProducts;