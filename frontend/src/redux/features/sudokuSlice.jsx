import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {apiGet} from '../../services/apiRequests'
import { GET_SUDOKU_TEMPLATE } from "../../constants/urls";

// Async thunk action creator
export const getSudoku = createAsyncThunk('sudoku/getSudoku', async () => {
    try {
      const response = await apiGet(GET_SUDOKU_TEMPLATE);
      return response.data;
    } catch (error) {
      // Handle any errors that occurred during the API request
      throw Error({msg:'Failed to fetch memory games',error});
    }
  });

const initialState = {
    data:null,
    loading:false,
    error:null,
    currentSudoku:null,
    sudokuLevels:[
      {level:"Easy"},
      {level:"Medium"},
      {level:"Hard"}
    ]
}

const sudokuSlice = createSlice({
    initialState,
    name:"sudoku",
    reducers:{
        setCurrentSudoku: (state,action) => {
            state.currentSudoku = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getSudoku.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getSudoku.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(getSudoku.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    }
})


export const {setCurrentSudoku} = sudokuSlice.actions;
export default sudokuSlice.reducer;