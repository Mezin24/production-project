import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileErrors } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
  name: 'Ivan',
  lastname: 'Ivanov',
  age: 23,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  username: 'Vania',
};

describe('validateProfileData', () => {
  test('success validation', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('invalid user data', async () => {
    const result = validateProfileData({ ...data, name: '', lastname: '' });

    expect(result).toEqual([ValidateProfileErrors.INDALID_USER_DATA]);
  });

  test('invalid age', async () => {
    const result = validateProfileData({ ...data, age: 0 });

    expect(result).toEqual([ValidateProfileErrors.INDALID_USER_AGE]);
  });

  test('invalid country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileErrors.INDALID_USER_COUNTRY]);
  });

  test('invalid data', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileErrors.INDALID_USER_DATA,
      ValidateProfileErrors.INDALID_USER_AGE,
      ValidateProfileErrors.INDALID_USER_COUNTRY,
    ]);
  });
});
