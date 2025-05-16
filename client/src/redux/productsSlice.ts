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
        searchProduct: (state, action) => {
            const searchKey = action.payload.toLowerCase();
            // Filter products where name matches searchKey (case-insensitive)
            const result = state.filter(
                (product) => product.name.toLowerCase() === searchKey
            );
            console.log(result);

            return result;
        },
    },
});

export const { setProducts, searchProduct } = productSlice.actions;

export default productSlice.reducer;