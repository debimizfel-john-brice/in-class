import axios from "axios";
import UserModel from "../Models/UserModel";
import appConfig from "../Utils/Config";
import { store } from "../Redux/Store";
import { login, logout, register } from "../Redux/authSlice";
import CredentialsModel from "../Models/CredentialsModel";

class AuthService{


    // Register:
    public async register(user:UserModel):Promise<void> {

        // AJAX Request:
        const response = await axios.post<string>( appConfig.registerUrl, user );

        // Extract Token:
        const token = response.data;

        // Save Token to Gloabl State:
        store.dispatch(register(token));
        
    }
    
    // Login:
    public async login(credentials:CredentialsModel):Promise<void> {

        // AJAX Request:
        const response = await axios.post<string>( appConfig.loginUrl, credentials );

        // Extract Token:
        const token = response.data;

        // Save Token to Gloabl State:
        store.dispatch(login(token));

    }

    // Logout:
    public logout():void{
        store.dispatch(logout())
    }


}
const authService = new AuthService();
export default authService;