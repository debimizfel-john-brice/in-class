import axios from "axios";
import UserModel from "../Models/UserModel";
import appConfig from "../Utils/Config";
import { store } from "../Redux/Store";
import { register } from "../Redux/authSlice";

class UsersService{


    // Get one User:
    public getUser():UserModel{
        return store.getState().auth.user;
    }

    // Update:
    public async update(user:UserModel):Promise<void> {

        // AJAX Request:
        const response = await axios.put<string>( appConfig.usersUrl + "/" + user.userId, user );

        // Extract Token:
        const token = response.data;

        // Save Token to Gloabl State:
        store.dispatch(register(token));
        
    }
    


}
const usersService = new UsersService();
export default usersService;