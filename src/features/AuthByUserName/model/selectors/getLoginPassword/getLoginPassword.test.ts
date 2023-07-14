import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: { password: '123' }
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });
  test('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {}
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
