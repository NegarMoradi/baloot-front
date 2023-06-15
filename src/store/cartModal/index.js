import { createSlice } from "@reduxjs/toolkit";



const InitialState = false;

export const cartModalSlice = createSlice({
    name: "cartModal",
    initialState: InitialState,

    reducers: {
        showCartModal: (state, action) => {
            state = true;
            return state;
        },
        hideCartModal: (state, action) => {
            state = false;
            return state;
        },
    },
});

export const { showCartModal, hideCartModal } =
cartModalSlice.actions;
    
export default cartModalSlice.reducer;
