import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    products: [],
    error: false
}

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        productStart: (state, action) => {
            state.isLoading = true;
        },
        productGet: (state, action) => {
            state.isLoading = false;
            state.products = action.payload
        },
        productCreate: (state, action) => {
            state.isLoading = false
            state.products.push(action.payload);
        },
        productFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
});

export const {
    productStart,
    productGet,
    productCreate,
    productFailure,
} = ProductSlice.actions;
export default ProductSlice.reducer;