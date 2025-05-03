import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    Login: false,
    SignUp: false,
    Cart: false
}
const PopUpsSlice = createSlice({
    name: "popUp",
    initialState,
    reducers: {

        ToggleLogin: (state) => {
            state.Login = !state.Login

        },
        ToggleSignUp: (state) => {
            state.SignUp = !state.SignUp

        },
        ToggleCart: (state) => {
            state.Cart = !state.Cart

        }

    }
})


export const { ToggleSignUp, ToggleCart, ToggleLogin } = PopUpsSlice.actions
export default PopUpsSlice.reducer