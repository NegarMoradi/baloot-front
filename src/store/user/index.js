import { createSlice } from "@reduxjs/toolkit";



const InitialState = {
    address: "",
    birthday: "",
    buyList: [],
    credit: 0,
    currentBuyListPrice: 0,
    email: '',
    password: "",
    purchasedList: {},
    serializedBuyList: {},
    username: ""
};

export const userSlice = createSlice({
    name: "user",
    initialState: InitialState,

    reducers: {
        setUserInfo: (state, action) => {
            state = action.payload;
            state.serializedBuyList = JSON.parse(action.payload.serializedBuyList);
            return state;
        },
        clear: (state) => {
            state = InitialState;
            return state;
        },
    },
});

export const { setUserInfo, clear } =
    userSlice.actions;
    
export default userSlice.reducer;
