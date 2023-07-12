import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsename } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: { username: 'user' }
    };
    expect(getLoginUsename(state as StateSchema)).toEqual('user');
  });
  test('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {}
    };
    expect(getLoginUsename(state as StateSchema)).toEqual('');
  });
});
