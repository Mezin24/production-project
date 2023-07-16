import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileErrors } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileErrors[]>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
      const { extra, rejectWithValue, getState } = thunkApi;
      try {
        const formData = getProfileForm(getState());
        const validationError = validateProfileData(formData);
        if (validationError.length > 0) {
          return rejectWithValue(validationError);
        }

        const response = await extra.api.post<Profile>('/profile', formData);
        return response.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
      }
    }
  );
