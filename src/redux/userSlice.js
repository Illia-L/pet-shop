import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api';

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, { rejectWithValue }) => {
    const refresh = document.cookie
      .split('; ')
      .find(row => row.startsWith('refresh='))
      ?.split('=')[1];

    if (!refresh) return rejectWithValue();

    try {
      const token = await api.getFreshAccessToken(refresh);
      const name = localStorage.getItem('userName');

      return { token, name };
    } catch (err) {
      const expirationDate = new Date();

      expirationDate.setDate(expirationDate.getDate() - 1);

      const formatedExpirationDate = expirationDate.toUTCString();

      document.cookie = `refresh=; path=/; expires=${formatedExpirationDate}; Secure`;
      localStorage.removeItem('userName');

      return rejectWithValue(err);
    }
  }
);

const initialState = {
  name: '',
  status: 'verifying', // 'verifying', 'loggedIn', 'loggedOut'
  token: '',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      Object.assign(state, action.payload);
    },

    login(state, action) {
      return { ...state, ...action.payload, status: 'loggedIn' };
    },

    logout(state) {
      state.name = '';
      state.status = 'loggedOut';
      state.token = '';
    },

    closeAuthView(state) {
      state.status = state.id ? 'active' : '';
    },
  },

  extraReducers: builder =>
    builder
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.name = action.payload.name;
        state.status = 'loggedIn';
      })
      .addCase(refreshUser.rejected, () => {
        return initialState;
      }),
});

export const { setUser, logout, closeAuthView } = slice.actions;

export default slice.reducer;

export const  handleLogin = (name, token, refresh) => dispatch => {
  const expirationDate = new Date();

  expirationDate.setDate(expirationDate.getDate() + 90);

  const formatedExpirationDate = expirationDate.toUTCString();

  localStorage.setItem('userName', name);
  document.cookie = `refresh=${refresh}; path=/; Secure; expires=${formatedExpirationDate}`;

  dispatch(slice.actions.login({ name, token }));
}
