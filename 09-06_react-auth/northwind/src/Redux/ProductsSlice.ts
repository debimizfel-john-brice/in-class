import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ProductModel from "../Models/ProductsModel";

interface ProductsSlice {
    productsList: ProductModel[];
}

const initialState: ProductsSlice = {
    productsList: []
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fethcProducts: (state, action: PayloadAction<ProductModel[]>) => {
            state.productsList = action.payload;
        },
        addProduct: (state, action: PayloadAction<ProductModel>) => {
            state.productsList.push(action.payload);
        },
        updateProduct: (state, action: PayloadAction<ProductModel>) => {
            const index_to_update = state.productsList.findIndex(p => p.id === action.payload.id);
            if (index_to_update >= 0) {
                state.productsList[index_to_update] = action.payload;
            }
        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            const index_to_delete = state.productsList.findIndex(p => p.id === action.payload);
            if (index_to_delete >= 0) {
                state.productsList.splice(index_to_delete, 1);
            }
        },
    }
});

export const { fethcProducts, addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;