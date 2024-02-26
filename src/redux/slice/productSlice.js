import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../../utils/setLocalStorage";

const initialState = {
    isLoading: false,
    product: null,
    products: null,
    isError: null
}

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        productStart: state => {
            state.isLoading = true;
        },
        productSuccess: (state, action) => {
            state.isLoading = false;
            state.product = action.payload.data;
            state.products.push(action.payload.data);
        },
        allProductSuccess: (state, action) => {
            state.isLoading = false;
            state.products = action.payload.data;
        },
        productFailure: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        },
    }
});

export const {
    productStart,
    productSuccess,
    allProductSuccess,
    productFailure
} = ProductSlice.actions;
export default ProductSlice.reducer;