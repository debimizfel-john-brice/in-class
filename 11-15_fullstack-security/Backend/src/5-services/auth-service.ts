import { OkPacket } from "mysql";
import UserModel from "../2-models/user-model";
import dal from "../4-utils/dal";
import { UnauthorizedError, ValidationError } from "../2-models/client-errors";
import RoleModel from "../2-models/role-model";
import cyber from "../4-utils/cyber";
import CredentialsModel from "../2-models/credentials-model";


// Register new User:
async function register(user:UserModel):Promise<string>{

    // Validation:

    // Is username taken:
    const isTaken = await isUsernameTaken(user.username);
    if(isTaken) throw new ValidationError(`User name: ${user.username} already taken`);

    // Set user role to User:
    user.roleId = RoleModel.User;

    // Hash password:
    user.password = cyber.hashPassword(user.password);

    // Create sql:
    const sql = `INSERT INTO users VALUES(
        DEFAULT,
        '${user.firstName}',
        '${user.lastName}',
        '${user.username}',
        '${user.password}',
        ${user.roleId})`;

    // Execute:
    const result:OkPacket = await dal.execute(sql);

    // Set back the new id:
    user.userId = result.insertId;

    // Create Token:
    const token = cyber.createToken(user);

    // Return Token:
    return token;

}


// Login User:
async function login(credentials: CredentialsModel):Promise<string>{

    // TODO Joi Validation...

    // Hash password:
    credentials.password = cyber.hashPassword(credentials.password);

    // Query:
    const sql = `SELECT * FROM users WHERE
                    username = '${credentials.username}'
                    AND password = '${credentials.password}'`;

    // Execute:
    const users = await dal.execute(sql);

    // Extract user:
    const user = users[0];

    // If user not exist:
    if( !user ) throw new UnauthorizedError("Incorrect username or password");

    // Create Token:
    const token = cyber.createToken(user);

    // Return Token:
    return token;
    
}


// Check is Username Taken:
async function isUsernameTaken(username:string):Promise<boolean>{

    // Create query:
    const sql = `SELECT EXISTS (SELECT * FROM users WHERE username = '${username}') AS isTaken`;

    // Execute:
    const result: OkPacket = await dal.execute(sql);

    // Get isTaken value:
    const isTaken = result[0].isTaken; // result = [{isTaken: 1}]

    // Return true is username is taken:
    return isTaken === 1;

}


export default {
    register,
    login
}