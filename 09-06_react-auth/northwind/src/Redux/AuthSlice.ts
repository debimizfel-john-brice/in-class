import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import UserModel from "../Models/UserModel";
import jwtDecode from "jwt-decode";

//^ 1.interface
interface AuthSlice {
    token: string;
    user: UserModel;
}


//^ 2.initial object
const initialState: AuthSlice = {
    token: localStorage.getItem("token"),
    user: null
}

if (initialState.token) {
    const container: { user: UserModel } = jwtDecode(initialState.token);
    initialState.user = container.user;
}


//^ 3.create Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register: (state, action: PayloadAction<string>) => {
            const container: { user: UserModel } = jwtDecode(action.payload);
            localStorage.setItem("token", action.payload);
            state.token = action.payload;
            state.user = container.user;
        },

        login: (state, action: PayloadAction<string>) => {
            const container: { user: UserModel } = jwtDecode(action.payload);
            localStorage.setItem("token", action.payload);
            state.token = action.payload;
            state.user = container.user;
        },

        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        }
    }
});

//^ 4.exports
export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;