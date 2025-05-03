import { createSlice } from "@reduxjs/toolkit";

import { Product } from "../types/productTypes";

const initialState: Product[] = [];
let productSlice = createSlice({
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