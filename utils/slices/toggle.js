import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name:"toggle",
    initialState:{
        animation:true,
        cart:false
    },
    reducers:{
        toggleAnimation:(state,action)=>{
            state.animation = false
        },
        toggleCart:(state,action)=>{
            state.cart = !state.cart
        }
    }
    
})


export const {toggleAnimation, toggleCart} = toggleSlice.actions
export default toggleSlice.reducer
