import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        inc: (state, action) => {
            state.count = state.count + action.payload;
        },
        dec: (state, action) => {
            state.count = state.count - action.payload;
        }
    }
});

export const { inc, dec } = CounterSlice.actions;
export default CounterSlice.reducer;