import express, { NextFunction, Request, Response } from "express"
import verifyLoggedIn from "../3-middleware/verify-logged-in";
import UserModel from "../2-models/user-model";
import usersService from "../5-services/users-service";


// Create Router:
const router = express.Router(); // Capital R 

// PUT http://localhost:4000/api/users/:id
router.put("/:id([0-9]+)", verifyLoggedIn, async (request: Request, response: Response, next:NextFunction  ) => {

    try{

        // Take route id into the body:
        request.body.id = +request.params.id;

        // Extract the User from the body of the request:
        const user = new UserModel(request.body);

        // Update User in the database:
        const updatedUser = await usersService.updateUser(user);

        // Response back:
        response.json( updatedUser );

    }catch(err:any){
        next(err);
    }

});


export default router;