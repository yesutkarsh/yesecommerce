import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name:"toggle",
    initialState:{
        productDetails:false
    },
    reducers:{
        toggleProdDetailCard:(state,action)=>{
            state.productDetails = true

        },
        toggleProdDetailCardOff:(state,action)=>{
            state.productDetails = false
        }
    }
    
})


export const {toggleProdDetailCard, toggleProdDetailCardOff} = toggleSlice.actions
export default toggleSlice.reducer
