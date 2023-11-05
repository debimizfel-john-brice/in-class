import { NextFunction, Request, Response } from "express";
import logger from "../4-utils/logger";

async function fileLogger(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        await logger(`Method: ${req.method} - URL: ${req.originalUrl}`);
        next();
    } catch (error: any) {
        next(error);
    }

}

export default fileLogger;