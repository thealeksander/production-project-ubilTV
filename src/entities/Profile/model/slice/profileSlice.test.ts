import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { isLoading } from 'entities/Profile/ui/ProfileCard/ProfileCard.stories';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  username: 'admin',
  age: 22,
  city: 'Samara',
  first: 'asd',
  lastname: 'trh',
  currency: Currency.EUR,
  country: Country.Russia,
};

describe('profileSlice test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({ readonly: true });
  });

  test('test set cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({ readonly: true, validateErrors: undefined, data, form: data });
  });

  test('test set updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '12356' } };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          username: '1234',
        }),
      ),
    ).toEqual({
      form: {
        username: '1234',
      },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual<DeepPartial<ProfileSchema>>({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
