// store.js
import { configureStore } from '@reduxjs/toolkit';
import toggleSliceReducer from './slices/toggle';
const store = configureStore({
  reducer: {
    toggleCard:toggleSliceReducer
    
  },
});

export default store;
