// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

// Define your API endpoints
const REGISTER_URL = `${USERS_BASE_URL}/v1/auth/register`;
const LOGIN_URL = `${USERS_BASE_URL}/v1/auth/login`;
const REFRESH_TOKEN_URL = `${USERS_BASE_URL}/v1/auth/refresh-tokens`;
const LOGOUT_URL = `${USERS_BASE_URL}/v1/auth/logout`;

// Async thunks to handle registration, login, token refresh, and logout
export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const response = await axios.post(REGISTER_URL, userData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const login = createAsyncThunk('auth/login', async (loginData, thunkAPI) => {
  try {
    const response = await axios.post(LOGIN_URL, loginData);
    localStorage.setItem('tokens', JSON.stringify(response.data.tokens));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const refreshToken = createAsyncThunk('auth/refreshToken', async (_, thunkAPI) => {
  try {
    const response = await axios.post(REFRESH_TOKEN_URL);
    localStorage.setItem('tokens', JSON.stringify(response.data.tokens));
    return response.data.tokens;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(LOGOUT_URL);
    localStorage.removeItem('tokens');
    return null;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Initial state
const initialState = {
  user: null,
  tokens: {
    access: null,
    refresh: null,
  },
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      // Clear user info and tokens
      state.user = null;
      state.tokens = { access: null, refresh: null };
      state.status = 'idle';
      state.error = null;
      // Also clear localStorage or any other persistent storage used
      localStorage.removeItem('tokens');
      localStorage.removeItem('user');
      // Add any other clean up you need here
    },
    // You can add reducers for other synchronous actions here
  },
  extraReducers: (builder) => {
    builder
      // Register user
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.tokens = action.payload.tokens;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        toast.error(state.error.message);
      })
      // Login user
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.tokens = action.payload.tokens;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        toast.error(state.error.message);
      })
      // Refresh token
      .addCase(refreshToken.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tokens = action.payload;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        toast.error(state.error.message);
      })
      // Logout user
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.tokens = { access: null, refresh: null };
        state.status = 'idle';
      });
  },
});

// Export actions and reducer
export const { reset } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.user;