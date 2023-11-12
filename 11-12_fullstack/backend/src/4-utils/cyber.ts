import { Request } from "express";
import UserModel from "../2-models/user-model";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../2-models/client-errors";


const secretKey = "cuteKitten";

// Create Token:
function createToken(user:UserModel):string{

    // Create Container containing the user:
    const container = { user };

    // Create option object:
    const options = { expiresIn: "3h" } 

    // Create Token:
    const token = jwt.sign(container, secretKey, options );

    // Return Token:
    return token;
    
}

// Header Authorization = "Bearer ";
// Verify Token:
async function verifyToken( request: Request ):Promise<UserModel>{
    
    // Promisify:
    return new Promise((resolve, reject) => {

        // Extract header:
        const header = request.header("authorization"); // "Bearer <token>"

        // If no header sent:
        if( !header ) reject(new UnauthorizedError("Unauthorized"));

        // Extract token:
        const token = header.replace("Bearer ", "");

        // If no token sent:
        if( !token ) reject(new UnauthorizedError("Missing Token"));

        // Verify Token:
        jwt.verify(token, secretKey, (err, container:{ user:UserModel } ) =>{

            if(err){
                reject(new UnauthorizedError("Invalid token"));
            }

            // All is good:
            resolve( container.user );
        });

    })

}



export default {
    createToken,
    verifyToken
}