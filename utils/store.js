// store.js
import { configureStore } from '@reduxjs/toolkit';
import toggleSliceReducer from './slices/toggle';
import cart from './slices/cart';
const store = configureStore({
  
  reducer: {
    cart:cart,
    toggleAnimation:toggleSliceReducer
    
  },
});

export default store;
