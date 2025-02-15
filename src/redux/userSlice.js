import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isServerError } from '../fake-data';

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

        if(isServerError(formdata.email)) return reject('error')

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
  async (data, { rejectWithValue }) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isServerError(data.password)) return reject('error');

        const fakeDataFromServer = {
          user: { ...data, id: 'uniqidfromserver' },
        };
        const registeredUser = fakeDataFromServer.user;

        localStorage.setItem('user', JSON.stringify(registeredUser));

        return resolve(registeredUser);
      }, 800);
    });

    try {
      return await promise;
    } catch (err) {
      return rejectWithValue(err);
    }

    // try {
    //   const response = await fetch('http://127.0.0.1:8000/register', {
    //     method: 'post',
    //     body: data,
    //   });

    //   const user = await JSON.parse(response);

    //   return user;
    // } catch (err) {
    //   return rejectWithValue(err);
    // }
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
        console.log(action);
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
