import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name:"toggle",
    initialState:{
        animation:true
    },
    reducers:{
        toggleAnimation:(state,action)=>{
            state.animation = false

        },
    }
    
})


export const {toggleAnimation} = toggleSlice.actions
export default toggleSlice.reducer
