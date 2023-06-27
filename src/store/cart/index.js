import { createSlice } from "@reduxjs/toolkit";



const InitialState = {};

export const cartSlice = createSlice({
    name: "cart",
    initialState: InitialState,

    reducers: {
        addMultiToCart: (state, action) => {
            return action.payload;
        },
        addOneToCart: (state, action) => {
            const newState = {...state};
            const newPayload = {
                ...action.payload,
                count: 1
            }
            newState[action.payload.id] = newPayload;
            return newState;
        },
        increaseCart: (state, action) => {
            state[action.payload].count = state[action.payload].count + 1;
            return state;
        },
        decreaseCart: (state, action) => {
            const count = state[action.payload].count;
            if(count > 1) {
                state[action.payload].count = state[action.payload].count - 1;
            } else {
                delete state[action.payload]
            }
             
            return state;
        },
        clear: (state) => {
            console.log("clear");
            state = InitialState;
            return state;
        },
    },
});

export const { addOneToCart, increaseCart, decreaseCart, addMultiToCart, clear } =
cartSlice.actions;
    
export default cartSlice.reducer;
