import { configureStore } from '@reduxjs/toolkit'
import memoryGameReducer from './features/memoryGameSlice';
import userReducer from './features/userSlice';

const store = configureStore({
    reducer: {
      memoryGameReducer,
      userReducer,
    },
});
  
export default store;


