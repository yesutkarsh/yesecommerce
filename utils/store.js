// store.js
import { configureStore } from '@reduxjs/toolkit';
import toggleSliceReducer from './slices/toggle';
const store = configureStore({
  reducer: {
    toggleAnimation:toggleSliceReducer
    
  },
});

export default store;
