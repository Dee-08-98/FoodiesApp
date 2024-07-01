import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast'
const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
    searchData : []
}

export const storeSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        add: (state, action) => {
            const find = state.cart.findIndex(item => item.id === action.payload.id)
            if (find >= 0) {
                toast.error("Items already present in your cart")
            }
            else {
                toast.success('Item added sucessfully in your cart')
                state.cart.push(action.payload)

            }
        },
        remove: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        increaseQuantity: (state, action) => {
            const find = state.cart.findIndex(item => item.id === action.payload)
            if (state.cart[find].quantity < 6) {
                state.cart[find].quantity += 1
            }
            else {
                toast.error('you reached your maximum limit')

            }
        },
        decreaseQuantity: (state, action) => {
            const find = state.cart.findIndex(item => item.id === action.payload)

            if (state.cart[find].quantity > 1) {
                state.cart[find].quantity -= 1
            }
            else {
                state.cart = state.cart.filter(item => item.id !== action.payload)
            }
        },
        searchUser : (state,action)=>{
            state.searchData = action.payload
        }
        
    }
})

export const { add, remove, increaseQuantity, decreaseQuantity , searchUser } = storeSlice.actions
export default storeSlice.reducer;