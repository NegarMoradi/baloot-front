import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
    access_token: '',
    refresh_token: ''
};

export const tokenSlice = createSlice({
    name: "token",
    initialState: InitialState,

    reducers: {
        setToken: (state, action) => {
            state.access_token = action?.payload?.access_token;
            state.refresh_token = action?.payload?.refresh_token;
        },
        clear: (state) => {
            state = InitialState;
            return state;
        },
    },
});

export const { setToken, clear } =
    tokenSlice.actions;

export default tokenSlice.reducer;
