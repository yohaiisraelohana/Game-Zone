import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {apiGet} from '../../services/apiRequests'
import { GET_SUDOKU_COUNT, GET_SUDOKU_TEMPLATE } from "../../constants/urls";

// Async thunk action creator
export const getSudoku = createAsyncThunk('sudoku/getSudoku', async (payload) => {
    try {
      const response = await apiGet(`${GET_SUDOKU_TEMPLATE + payload}`);
      return response.data;
    } catch (error) {
      // Handle any errors that occurred during the API request
      throw Error({msg:'Failed to fetch sudoku templates',error});
    }
  });
  export const getSudokuCount = createAsyncThunk('sudoku/getSudokuCount', async (payload) => {
    try {
      const response = await apiGet(`${GET_SUDOKU_COUNT + payload}`);
      return response.data;
    } catch (error) {
      // Handle any errors that occurred during the API request
      throw Error({msg:'Failed to fetch sudolu templates',error});
    }
  });

const initialState = {
    data:null,
    loading:false,
    error:null,
    currentSudoku:null,
    pages:null,
    page:1,
    level:null,
    sudokuLevels:[
      {level:"easy",revard:150},
      {level:"medium",revard:300},
      {level:"hard",revard:500}
    ]
}

const sudokuSlice = createSlice({
    initialState,
    name:"sudoku",
    reducers:{
        setCurrentSudoku: (state,action) => {
          state.currentSudoku = action.payload;
        },
        setPage: (state,action) => {
          state.page = action.payload;
        },
        setLevel: (state,action) => {
          state.level = action.payload;
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
        })
        .addCase(getSudokuCount.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getSudokuCount.fulfilled, (state, action) => {
          state.loading = false;
          state.pages = action.payload.pages;
        })
        .addCase(getSudokuCount.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    }
})


export const {setCurrentSudoku , setPage ,setLevel} = sudokuSlice.actions;
export default sudokuSlice.reducer;