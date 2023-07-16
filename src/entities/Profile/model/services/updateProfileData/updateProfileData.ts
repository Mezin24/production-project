import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
      const { extra, rejectWithValue, getState } = thunkApi;
      try {
        const formData = getProfileForm(getState());
        const response = await extra.api.post<Profile>('/profile', formData);
        return response.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue('error');
      }
    }
  );
