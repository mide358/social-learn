import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import { fetchCount } from './counterAPI';

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null;

const initialState = {
  login: false,
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
};

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      // const body = JSON.stringify(email, password);
      const { data } = await axios.post(
        'http://localhost:3030/user',
        { email, password },
        config
      );
      console.log(data);
      localStorage.setItem('userToken', data.userToken);
      return data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // setUser: (state, action) => {
    //   state = action.payload;
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userToken = action.payload;
        state.userInfo = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const loginSelector = (state) => state.login;
export default loginSlice.reducer;
