import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
  'user/fetch',
  async (_, { rejectWithValue }) => {
    try {
      // send api request to fetch user
      const userStringified = localStorage.getItem('user');
      const user = await JSON.parse(userStringified);

      if (!user) return;
      if (!user.remember) return;

      return user;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (formdata, { rejectWithValue }) => {
    // fetch to login endpoint
    try {
      const userStringified = localStorage.getItem('user');
      const user = JSON.parse(userStringified);
      const isCorrect =
        user.email === formdata.email && user.password === formdata.password;

      if (isCorrect) {
        const updatedUser = { ...user, remember: formdata.remember };
        const updatedStringifiedUser = JSON.stringify(updatedUser);

        localStorage.setItem('user', updatedStringifiedUser);

        return user;
      } else {
        return rejectWithValue('Невірна електронна пошта та/або пароль');
      }
    } catch (err) {
      return rejectWithValue('Сталася помилка. Спробуйте пізніше');
    }
  }
);

export const signup = createAsyncThunk(
  'user/signup',
  async (data, { rejectWithValue }) => {
    // try {
    //   const response = await fetch('http://127.0.0.1:8000/register');
    //   const user = await JSON.parse(response);
    //   console.log(user);
    // } catch (err) {
    //   console.log(err);
    // }

    // const data = { user: { ...data, id: 'uniqidfromserver' } };

    // const promise = new Promise((resolve, reject) => {
    //   const registeredUser = data.user;
    //   const failMessage = data.message;

    //   if (registeredUser) {
    //     localStorage.setItem('user', JSON.stringify(registeredUser));
    //     return resolve(registeredUser);
    //   }

    //   if (failMessage) return reject(failMessage);

    //   return reject('Невідома внутрішня помилка');
    // });

    try {
      const response = await fetch('http://127.0.0.1:8000/register', {
        method: 'post',
        body: data,
      });

      const user = await JSON.parse(response);

      console.log(user);
      
      return user;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const initialState = {
  id: '',
  name: '',
  isLoading: false,
  fail: '',
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
      state.isLoading = false;
      state.fail = '';
    },
  },

  extraReducers: builder =>
    builder
      .addCase(signup.pending, state => {
        state.isLoading = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.fail = action.payload;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.isLoading = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log(action);
        state.id = action.payload.id;
        state.name = action.payload.name;
      })
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.fail = action.payload;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.isLoading = false;
      }),
});

export const { logout } = slice.actions;

export default slice.reducer;
