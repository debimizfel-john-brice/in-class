import { Request } from "express";
import UserModel from "../2-models/user-model";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../2-models/client-errors";
import crypto from "crypto";


const secretKey = "cuteKitten";

// Create Token:
function createToken(user:UserModel):string{

    // Remove password:
    delete user.password;

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



function hashPassword(plainText: string):string{

    // SHA - Secure Hash Algorithm
    // HAMC - Hash-based message authentication

    // Without salt:
    // const hashedText = crypto.createHash("sha512").update(plainText).digest("hex");
    
    // With salt:
    const salt = "TheAmaizing4578-35Students";
    const hashedText = crypto.createHmac("sha512", salt).update(plainText).digest("hex");

    return hashedText;

}


export default {
    createToken,
    verifyToken,
    hashPassword
}