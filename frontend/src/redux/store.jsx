import { configureStore } from '@reduxjs/toolkit'
import memoryGameReducer from './features/memoryGameSlice';
import userReducer from './features/userSlice';
import sudokuReducer from './features/sudokuSlice';

const store = configureStore({
    reducer: {
      memoryGameReducer,
      userReducer,
      sudokuReducer
    },
});
  
export default store;


