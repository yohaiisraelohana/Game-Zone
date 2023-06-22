import { configureStore } from '@reduxjs/toolkit'
import memoryGameReducer from './features/memoryGameSlice';
import userReducer from './features/userSlice';
import sudokuReducer from './features/sudokuSlice';
import cloudinaryImagesReducer from './features/cloudinaryImagesSlice';

const store = configureStore({
    reducer: {
      memoryGameReducer,
      userReducer,
      sudokuReducer,
      cloudinaryImagesReducer
    },
});
  
export default store;


