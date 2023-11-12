import { NextFunction, Request, Response } from "express";
import cyber from "../4-utils/cyber";

async function verifyLoggedin(req: Request, res: Response, next: NextFunction) {
    try {
        await cyber.verifyToken(req);
        next();
    } catch (error: any) {
        next(error);
    }
}

export default verifyLoggedin;