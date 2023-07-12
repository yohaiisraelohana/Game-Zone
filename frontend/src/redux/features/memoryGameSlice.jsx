import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {apiDelete, apiGet, apiPost, apiPut} from '../../services/apiRequests'
import {ADD_MEMORY_GAME, DELETE_MEMORY_GAME, GET_MEMORY_GAMES, UPDATE_MEMORY_GAME} from '../../constants/urls'

// Async thunk action creator
export const getMemoryGames = createAsyncThunk('memoryGame/getMemoryGames', async () => {
    try {
      const response = await apiGet(GET_MEMORY_GAMES);
      return response.data;
    } catch (error) {
      // Handle any errors that occurred during the API request
      throw Error({msg:'Failed to fetch memory games',error});
    }
});
export const addMemoryGame = createAsyncThunk('memoryGame/addMemoryGame', async (payload) => {
  try {
    const response = await apiPost(ADD_MEMORY_GAME,payload);
    return response.data;
  } catch (error) {
    // Handle any errors that occurred during the API request
    console.log(error);
    throw Error({msg:'Failed to add memory games',error});
  }
});
export const updateMemoryGame = createAsyncThunk('memoryGame/updateMemoryGame', async (payload) => {
  try {
    const response = await apiPut(UPDATE_MEMORY_GAME + payload._id,payload);
    return response.data;
  } catch (error) {
    // Handle any errors that occurred during the API request
    throw Error({msg:'Failed to update memory games',error});
  }
});
export const deleteMemoryGame = createAsyncThunk('memoryGame/deleteMemoryGame', async (payload) => {
  try {
    const response = await apiDelete(DELETE_MEMORY_GAME + payload);
    return response.data;
  } catch (error) {
    // Handle any errors that occurred during the API request
    throw Error({msg:'Failed to delete memory games',error});
  }
});

const initialState = {
    data:null,
    loading:false,
    error:null,
    currentGame:null,
    memoryLevels:[
      {name:"Begginer",level:6},
      {name:"Advanced",level:12},
      {name:"Pro",level:24}
    ]
}


const memoryGameSlice = createSlice({
    initialState,
    name:"memoryGame",
    reducers:{
      setCurrentGame: (state,action) => {
        state.currentGame = action.payload;
      }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getMemoryGames.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getMemoryGames.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(getMemoryGames.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(addMemoryGame.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(addMemoryGame.fulfilled, (state, action) => {
          state.loading = false;
          const new_data = [...state.data];
          new_data.push(action.payload);
          state.data = new_data;
        })
        .addCase(addMemoryGame.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(updateMemoryGame.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateMemoryGame.fulfilled, (state, action) => {
          state.loading = false;
          state.data = [...state.data.map((m)=>(m._id == action.payload._id ? action.payload : m))];
        })
        .addCase(updateMemoryGame.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(deleteMemoryGame.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteMemoryGame.fulfilled, (state, action) => {
          state.loading = false;
          state.data = [...state.data.filter(m => m._id != action.payload)];
        })
        .addCase(deleteMemoryGame.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    }
})

export const {setCurrentGame} = memoryGameSlice.actions;
export default memoryGameSlice.reducer;