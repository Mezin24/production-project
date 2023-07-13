import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
  username: string,
  password: string,
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>>(
    'users/fetchByIdStatus',
    async (authData, thunkApi) => {
      const { extra, dispatch, rejectWithValue } = thunkApi;
      try {
        const response = await extra.api.post<User>('/login', authData);

        if (!response.data) {
          throw new Error();
        }
        localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
        dispatch(userActions.setAuthData(response.data));
        extra.navigate('/about');
        return response.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue('error');
      }
    }
  );
