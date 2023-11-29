import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const backendURL = 'http://localhost:3030';

// const userToken = localStorage.getItem('userToken')
//   ? localStorage.getItem('userToken')
//   : null;

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ firstName, lastName, email, password }, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${backendURL}/user`,
        { firstName, lastName, email, password },
        config
      );

      return data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${backendURL}/user`,
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
