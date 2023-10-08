import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice";
import authReducer from "./AuthSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
