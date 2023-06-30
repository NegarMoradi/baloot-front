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
    username: ""
};

export const userSlice = createSlice({
    name: "user",
    initialState: InitialState,

    reducers: {
        setUserInfo: (state, action) => {
            state = action.payload;
            return state;
        },
        userClear: (state) => {
            state = InitialState;
            return state;
        },
    },
});

export const { setUserInfo, userClear } =
    userSlice.actions;
    
export default userSlice.reducer;
