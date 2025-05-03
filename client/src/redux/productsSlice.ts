import { createSlice } from "@reduxjs/toolkit";


import { ItemTypes } from "../types/ItemType";
const initialState: ItemTypes[] = [];
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            return action.payload;
        },


    },
})
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;