import { DeepPartial } from '@reduxjs/toolkit';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileErrors } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  name: 'Ivan',
  lastname: 'Ivanov',
  age: 23,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  username: 'Vania',
};

describe('profileSlice', () => {
  test('set username', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true)
    )).toEqual({ readonly: true });
  });

  test('cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      data,
      form: { username: '' }
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit()
    )).toEqual({ readonly: true, data, form: data });
  });

  test('update data', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '123' }
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ username: '12345' })
    )).toEqual({ form: { username: '12345' } });
  });

  test('update profile service data', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validaionError: [ValidateProfileErrors.INDALID_USER_AGE]
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending
    )).toEqual({
      isLoading: true,
      validaionError: undefined
    });
  });

  test('update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, '')
    )).toEqual({
      isLoading: false,
      validaionError: undefined,
      data,
      form: data,
      readonly: true
    });
  });
});
