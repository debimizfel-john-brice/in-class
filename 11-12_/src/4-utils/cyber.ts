import { ValidationError } from "../2-models/status_model";
import UserModel from "../2-models/user_model";
import jwt from "jsonwebtoken";

const secretKey = "my_secret_key";
function createToken(user: UserModel): string {
    const container = { user };

    const options = { expiresIn: "1d" };
    const token = jwt.sign(container, secretKey, options);

    return token;
}

async function verifyToken(request:Request): Promise<boolean>{

    return new Promise((resolve, reject) => {
        const header = request.header("authorization");
        if(!header ) reject(new UnathorizedError("authorization"));

        const token = header.replace("Bearer ", "");

        if(!token) reject(new UnathorizedError("Missing token"));

        jwt.verify(token, secretKey, (err) => {
            if(err) reject(new UnathorizedError("Invalid token"));
            resolve(true);
        });


    });

}

export default {
    createToken,
    verifyToken
}