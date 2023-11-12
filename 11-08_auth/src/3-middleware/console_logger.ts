import { NextFunction, Request, Response } from "express";

function consoleLogger(req: Request, res: Response, next: NextFunction) {
    console.log(`Request received: ${req.method} ${req.originalUrl}`);
    next();
}

export default consoleLogger;