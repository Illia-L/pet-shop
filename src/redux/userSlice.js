import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isServerError } from '../fake-data';
import axios from 'axios';

const apiUrl = 'http://54.196.142.53:8000'

export const fetchUser = createAsyncThunk(
  'user/fetch',
  async (_, { rejectWithValue }) => {
    const promise = new Promise((resolve, reject) => {
      const userStringified = localStorage.getItem('user');
      const user = JSON.parse(userStringified);

      if (!user) return reject();
      // if (!user.remember) return;
      return resolve(user);
    });

    // send api request to fetch user
    const user = await promise;

    return user;
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (formdata, { rejectWithValue }) => {
    // fetch to login endpoint
    const promise = new Promise((resolve, reject) => {
      const userStringified = localStorage.getItem('user');
      const user = JSON.parse(userStringified);
      const isCorrect =
        user.email === formdata.email && user.password === formdata.password;

      setTimeout(() => {
        if (isCorrect) return resolve(user);

        if (isServerError(formdata.email)) return reject('error');

        reject('fail');
      }, 800);
    });

    try {
      const user = await promise;
      // const updatedUser = { ...user, remember: formdata.remember };
      // const updatedStringifiedUser = JSON.stringify(updatedUser);

      // localStorage.setItem('user', updatedStringifiedUser);

      return user;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const signup = createAsyncThunk(
  'user/signup',
  async (formData, { rejectWithValue }) => {
    console.log('signup called...');

    const {
      name: first_name,
      email,
      password,
      passwordConfirm: password_confirm,
    } = formData;

    const registerData = {first_name, email, password, password_confirm}

    console.log('registerData', registerData);

    try {
      const response = await axios.post(`${apiUrl}/register/`, registerData)
      const serverUser = response.data

      console.log('serverUser', serverUser);

      const {id, first_name: name} = serverUser

      console.log('id, name:', id, name);

      return {id, name};
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const initialState = {
  id: '',
  name: '',
  status: '',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },

    logout(state) {
      state.id = '';
      state.name = '';
      state.status = '';
      state.fail = '';
    },
  },

  extraReducers: builder =>
    builder
      .addCase(signup.pending, state => {
        state.status = 'loading';
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = action.payload;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.status = 'success';
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
        state.status = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.status = 'success';
      }),
});

export const { logout } = slice.actions;

export default slice.reducer;
