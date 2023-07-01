import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
    token: '',
};

export const tokenSlice = createSlice({
    name: "token",
    initialState: InitialState,

    reducers: {
        setToken: (state, action) => {
            state.token = action?.payload?.jwtToken;
        },
        tokenClear: (state) => {
            state = InitialState;
            return state;
        },
    },
});

export const { setToken, tokenClear } =
    tokenSlice.actions;

export default tokenSlice.reducer;
