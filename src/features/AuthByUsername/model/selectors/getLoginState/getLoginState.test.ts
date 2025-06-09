import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState test', () => {
  test('should return login state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'abc',
        password: '123',
      },
    };

    expect(getLoginState(state as StateSchema)).toEqual({
      username: 'abc',
      password: '123',
    });
  });

  test('shuold work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
