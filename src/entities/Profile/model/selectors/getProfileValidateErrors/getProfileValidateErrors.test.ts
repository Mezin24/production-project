import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileErrors } from '../../types/profile';

describe('getProfileValidateErrors', () => {
  test('should return validation errors', () => {
    const errors = [
      ValidateProfileErrors.INDALID_USER_DATA,
      ValidateProfileErrors.INDALID_USER_AGE
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validaionError: errors
      }
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });
  test('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
