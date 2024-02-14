import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
});