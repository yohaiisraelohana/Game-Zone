import { configureStore } from '@reduxjs/toolkit'
import memoryGameReducer from './features/memoryGameSlice';
import userReducer from './features/userSlice';
import sudokuReducer from './features/sudokuSlice';
import cloudinaryGamesImagesReducer from './features/cloudinaryGamesImagesSlice';

const store = configureStore({
    reducer: {
      memoryGameReducer,
      userReducer,
      sudokuReducer,
      cloudinaryGamesImagesReducer
    },
});
  
export default store;


