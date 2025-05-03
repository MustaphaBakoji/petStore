import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./productsSlice"
import popUpReducer from './popUPSlice'
import cartReducer from "./cartSlice"
import userReducer from "./userSlice"
import adminReducer from "./admin"
import errorReducer from "./errorSlice"
export const store = configureStore({
    reducer: { productsReducer, popUpReducer, cartReducer, userReducer, adminReducer, errorReducer },

})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch