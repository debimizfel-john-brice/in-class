import { NextFunction, Request, Response } from "express";

function shabbatForbidden( request: Request, response: Response, next: NextFunction ){

    if( isShabbat() ){
        response.send("Sorry, Shabbat today...");
        // next(new Error("Sorry, Shabbat today..."))
    }else{
        next();
    }

}

export default shabbatForbidden;


function isShabbat(){
    const now = new Date();
    const day = now.getDay() + 1;
    const hour = now.getHours();
    return (day === 6 && hour >= 17) || ( day === 7 && hour <= 18 )
}