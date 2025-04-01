import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isServerError } from '../fake-data';
import axios from 'axios';
import { act } from 'react';

const apiUrl = 'https://gfts.website';

export const fetchUser = createAsyncThunk(
  'user/fetch',
  async (_, { rejectWithValue }) => {
    const promise = new Promise((resolve, reject) => {
      const userStringified = localStorage.getItem('user');
      const user = JSON.parse(userStringified);

      if (!user) return reject();
      return resolve(user);
    });

    const user = await promise;

    return user;
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (formdata, { rejectWithValue }) => {
    const { email, password } = formdata;
    const loginData = { email, password };

    try {
      return await axios.post(`${apiUrl}/login/`, loginData);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const signup = createAsyncThunk(
  'user/signup',
  async (formData, { rejectWithValue }) => {
    const {
      name: first_name,
      email,
      password,
      passwordConfirm: password_confirm,
    } = formData;

    const registerData = { first_name, email, password, password_confirm };

    try {
      const response = await axios.post(`${apiUrl}/register/`, registerData);
      const { first_name: name, email } = response.data;

      return { name, email };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const initialState = {
  name: '',
  status: '', // '', 'loading', '401', '500', 'active'
  email: '',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      Object.assign(state, action.payload);
    },

    logout(state) {
      state.id = '';
      state.name = '';
      state.status = '';
      state.fail = '';
    },

    closeAuthView(state) {
      state.status = state.id ? 'active' : '';
    },
  },

  extraReducers: builder =>
    builder
      .addCase(signup.pending, state => {
        state.status = 'loading';
      })
      .addCase(signup.rejected, state => {
        state.status = '500';
      })
      .addCase(signup.fulfilled, (state, action) => {
        const {name, email} = action.payload

        state.name = name;
        state.email = email;
        state.status = 'active';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.status = 'success';
      })
      .addCase(login.pending, state => {
        state.status = 'loading';
      })
      .addCase(login.rejected, (state, action) => {
        const statusCode = action.payload.response?.status;
        const status = statusCode === 401 ? '401' : '500';

        state.status = status;
      })
      .addCase(login.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.name = action.payload.data.first_name;
        state.status = 'active';
      }),
});

export const { logout, closeAuthView } = slice.actions;

export default slice.reducer;
