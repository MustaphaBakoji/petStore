import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    admin: false,

}
const adminSlice = createSlice({
    initialState,
    name: "admin",
    reducers: {
        setAdmin: (state) => {
            state.admin = true

        }
    }
})

export default adminSlice.reducer
export const { setAdmin } = adminSlice.actions