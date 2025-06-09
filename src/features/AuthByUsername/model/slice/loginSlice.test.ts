import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice test', () => {
  test('test set userName', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUserName('123')),
    ).toEqual({ username: '123' });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('123')),
    ).toEqual({ password: '123' });
  });
});
