import { OkPacket } from "mysql";
import UserModel from "../2-models/user_model";
import dal from "../4-utils/dal";
import { ValidationError } from "../2-models/status_model";
import RoleModel from "../2-models/role_model";
import cyber from "../4-utils/cyber";
import CredentialsModel from "../2-models/credentials_model";

async function register(user: UserModel): Promise<string> {
    // TODO Validate user input

    // TODO Check if user exists in database
    const exists: boolean = await usernameExists(user.username);
    if (exists) throw new ValidationError(`Username: ${user.username} already exists`);

    user.roleId = RoleModel.User;

    const sql = `INSERT INTO users VALUES (DEFAULT,
        '${user.firstName}',
        '${user.lastName}',
        '${user.username}',
        '${user.password}',
        ${user.roleId});`;

    const result: OkPacket = await dal.execute(sql);

    user.userId = result.insertId;
    const toker: string = cyber.createToken(user);
    return toker;

}

async function login(credentials: CredentialsModel): Promise<string> {
    // TODO Validate user input

    // TODO Check if password is correct
    const sql = `SELECT * FROM users WHERE username = '${credentials.username}' AND password = '${credentials.password}';`


    const users = await dal.execute(sql);
    const user = users[0];

    if (!user) throw new ValidationError(`Username or password is incorrect`);

    const token = cyber.createToken(user);
    return token;

}


async function usernameExists(username: string): Promise<boolean> {

    const sql = `SELECT EXISTS(SELECT * FROM users WHERE username = ${username}) As exist;`;

    // TODO Execute SQL query
    const result: OkPacket = await dal.execute(sql);

    const exists: boolean = result[0].exist === 1 ? true : false;

    return exists;
}

export default {
    register,
    login
};