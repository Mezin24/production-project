import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
  username: string,
  password: string,
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
  'users/fetchByIdStatus',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('error');
    }
  }
);
