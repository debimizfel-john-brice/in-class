import { OkPacket } from "mysql"
import UserModel from "../2-models/user-model"
import dal from "../4-utils/dal"
import { ResourceNotFoundError } from "../2-models/client-errors";
import RoleModel from "../2-models/role-model";
import cyber from "../4-utils/cyber";


// update user:
async function updateUser(user:UserModel): Promise<string>{

    // Validation:
    // ....

    // Set role always to user:
    user.roleId = RoleModel.User;

    // Query:
    const sql = `UPDATE users SET
            firstName = '${user.firstName}',
            lastName = '${user.lastName}',
            username = '${user.username}',
            password = '${user.password}'
            WHERE userId = ${user.userId}`;

    // Execute:
    const result: OkPacket = await dal.execute(sql);

    // validate 
    if(result.affectedRows === 0) throw new ResourceNotFoundError(user.userId);

    // Create token:
    const token = cyber.createToken(user);
    
    // Return:
    return token;

}

export default {
    updateUser
}
