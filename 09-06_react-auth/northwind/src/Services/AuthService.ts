import axios from "axios";
import UserModel from "../Models/UserModel";
import appConfig from "../Utils/Config";
import { store } from "../Redux/Store";
import { login, logout, register } from "../Redux/AuthSlice";
import CredentialsModel from "../Models/CredentialsModel";

class AuthService {

    public async register(user: UserModel): Promise<void> {
        const token = (await axios.post<string>(appConfig.registerUrl, user)).data;

        store.dispatch(register(token));
    }

    public async login(user: CredentialsModel): Promise<void> {
        const token = (await axios.post<string>(appConfig.loginUrl, user)).data;

        store.dispatch(login(token));
    }

    public logout(): void {
        store.dispatch(logout());
    }
}

const authService = new AuthService;
export default authService;