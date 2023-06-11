import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN_USER, SIGNUP_USER } from "../../constants/urls";
import { apiPost } from "../../services/apiRequests";


export const login = createAsyncThunk("user/login", async (userData) => {
  try {
    const response = await apiPost(LOGIN_USER, userData);
    return response.data;
  } catch (error) {
    console.log(error.response.data.error);
    throw error.response.data.error;
  }
});

export const signUp = createAsyncThunk("user/signUp", async (userData) => {
    try {
        const response = await apiPost(SIGNUP_USER,userData);
        return response.data;
    } catch (error) {
        console.log(error.response.data.data);
        throw error.response.data.data;
    }
})



const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(login.pending, (state) => {
        state.loading = true;
    })
    .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
        state.loading = false;
    })
    .addCase(login.rejected, (state, action) => {
        console.log(action.error.message);
        state.error = action.error.message;
        state.loading = false;
    }) 
    .addCase(signUp.pending , (state,action) => {
        state.loading = true;
    })
    .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
    })
    .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });

  },
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
