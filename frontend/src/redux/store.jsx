import { configureStore } from '@reduxjs/toolkit'
import memoryGameReducer from './features/memoryGameSlice';

const store = configureStore({
    reducer: {
      memoryGameReducer
    },
});
  
export default store;


