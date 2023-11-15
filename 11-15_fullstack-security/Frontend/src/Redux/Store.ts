import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import authReducer from "./authSlice";


// Main store ( global state ) object:
export const store = configureStore({
    reducer: {
        products: productsReducer, // A slice in the Global State:
        auth: authReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
// store.subscribe(() => console.log("store updated !!!"))

