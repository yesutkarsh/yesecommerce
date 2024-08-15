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
                state.totalPrice = state.totalPrice+Number(item?.price)
                localStorage.setItem("cart", JSON.stringify(state.cart));
            }else{
                return
            }
            
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const itemIndex = state.cart.findIndex((cartItem) => cartItem.id === itemId);
            if (itemIndex !== -1) {
              const removedItem = state.cart.splice(itemIndex, 1);
              state.totalPrice -= Number(removedItem[0].price);
              localStorage.setItem("cart", JSON.stringify(state.cart));
            }
          },
    }
})

export const { addToCart, removeFromCart } = cart.actions;
export default cart.reducer;