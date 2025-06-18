import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm test', () => {
  test('should return error', () => {
    const form = {
      username: 'admin',
      age: 22,
      city: 'Samara',
      first: 'asd',
      lastname: 'trh',
      currency: Currency.EUR,
      country: Country.Russia,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('shuold work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
