import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../../utils/setLocalStorage";

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    auth: null,
    isError: null
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authStart: state => {
            state.isLoading = true;
        },
        authSuccess: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.auth = action.payload.data;
            saveToLocalStorage("x-token", action.payload.token);
            saveToLocalStorage("x-id", action.payload.data._id);
        },
        authFailure: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        },
    }
});

export const {
    authStart,
    authSuccess,
    authFailure
} = AuthSlice.actions;
export default AuthSlice.reducer;