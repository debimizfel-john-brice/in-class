import RoleModel from "./role_model";

class UserModel{
    public userId: number;
    public firstName: string;
    public lastName: string;
    public username: string;
    public password: string;
    public roleId: RoleModel;

    constructor(user:UserModel){
        this.userId = user.userId;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.username = user.username;
        this.password = user.password;
        this.roleId = user.roleId;
    }

    // TODO Validate user input
}

export default UserModel;