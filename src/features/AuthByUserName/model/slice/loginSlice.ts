import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername(state, actions: PayloadAction<string>) {
      state.username = actions.payload;
    },
    setPassword(state, actions: PayloadAction<string>) {
      state.password = actions.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.username = actions.payload.username;
        state.password = actions.payload.password;
      })
      .addCase(loginByUsername.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      });
  }
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
