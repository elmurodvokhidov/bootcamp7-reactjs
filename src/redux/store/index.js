import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import productSlice from "../slice/productSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        product: productSlice
    }
});