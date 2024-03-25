import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../slice/ProductSlice";

export const store = configureStore({
    reducer: {
        products: ProductSlice,
    }
})