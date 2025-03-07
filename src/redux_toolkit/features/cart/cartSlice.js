import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 90,
    total: 0,
    isLoading: true
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload

            state.cartItems = state.cartItems.filter(item => item.id !== itemId)
        },
        increaseItem: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload)
            cartItem.amount = cartItem.amount + 1
        }
    }
});

console.log('cartSlice', cartSlice)

export const { clearCart, removeItem, increaseItem } = cartSlice.actions
export default cartSlice.reducer;