import { NextFunction, Request, Response } from "express";
import logger from "../4-utils/logger";
import appConfig from "../4-utils/app-config";

function catchAll(err: any, request: Request, response: Response, next: NextFunction) {

    // log the error:
    console.log(err);


    // const status = err.status ? err.status : 500; // Ternary
    const status = err.status || 500; // Short circut

    // // log to file:
    // if (status >= 500) {
    //     logger.errorsLogger(err.message, err);
    // }

    let msg = err.message;

    // if (appConfig.isProduction && status >= 500) {
    //     msg = "Some Error...";
    // }


    // Response to client:
    response.status(status).send(msg);

}

export default catchAll;