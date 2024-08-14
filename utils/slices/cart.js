import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name:"cart",
    initialState:{
        cart:[],
        totalPrice:Number(0)
    },
    reducers:{
        addToCart:(state,action)=>{
            const item = action.payload
            const itemExist = state.cart.find(cartItem=>      cartItem.id === item.id
        )
            if(!itemExist){
                state.cart.push(action.payload)
                state.totalPrice = state.totalPrice+Number(item.price)
            }else{
                return
            }
            
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        }
    }
})

export const { addToCart, removeFromCart } = cart.actions;
export default cart.reducer;