import {createSlice, PayloadAction } from "@reduxjs/toolkit"
import ProductModel from "../Models/ProductsModel"


// Declere interface for initialState object:
interface ProductsState{
    productsList:ProductModel[]
}

// Define initialState Object:
const initialState:ProductsState = {
    productsList: [],
}

// Create Slice:
const productsSlice = createSlice({
    name: "products",   // Name of the slice
    initialState,       // initialState object
    reducers: {         // list of reducers functions

        fetchProducts: ( state, action:PayloadAction<ProductModel[]> ) => {
            state.productsList = action.payload;
            // const newState = {...state }
            // newState.productsList = action.payload;
            // return newState;
        },

        addProduct: (state, action:PayloadAction<ProductModel>) => {
            state.productsList.push(action.payload);
        },

        updateProduct: (state, action:PayloadAction<ProductModel>) => {
            const indexToUpadte = state.productsList.findIndex( p => p.id === action.payload.id );
            if( indexToUpadte >= 0 ){
                state.productsList[indexToUpadte] = action.payload;
            }
        },
        
        deleteProduct: (state, action:PayloadAction<number>) => {
            const indexToDelete = state.productsList.findIndex( p => p.id === action.payload );
            if( indexToDelete >= 0 ){
                state.productsList.splice(indexToDelete, 1);
            }
        }
    }
})

// Export all reducers functions for later use in App
export const { fetchProducts, addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;