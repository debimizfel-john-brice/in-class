import { NextFunction, Request, Response } from "express";
import { RouteNotFound } from "../2-models/status_model";

function routNotFound(req: Request, res: Response, next: NextFunction) {

    const err = new RouteNotFound(req.originalUrl);
    console.log("error from rout not found ");
    console.log(err);
    next(err);
}

export default routNotFound;