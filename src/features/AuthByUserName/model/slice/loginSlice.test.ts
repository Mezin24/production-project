import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'Pavel' };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('Pavel')))
      .toEqual({ username: 'Pavel' });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123')))
      .toEqual({ password: '123' });
  });
});
