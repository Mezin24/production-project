import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return form', () => {
    const form = {
      name: 'Ivan',
      lastname: 'Ivanov',
      age: 23,
      city: 'Moscow',
      country: Country.Russia,
      currency: Currency.RUB,
      username: 'Vania',
    };
    const state: DeepPartial<StateSchema> = {
      profile: { form }
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
  test('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
