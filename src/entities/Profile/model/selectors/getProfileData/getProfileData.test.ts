import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return data', () => {
    const data = {
      name: 'Ivan',
      lastname: 'Ivanov',
      age: 23,
      city: 'Moscow',
      country: Country.Russia,
      currency: Currency.RUB,
      username: 'Vania',
    };
    const state: DeepPartial<StateSchema> = {
      profile: { data }
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
