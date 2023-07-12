import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: { isLoading: true }
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {}
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
