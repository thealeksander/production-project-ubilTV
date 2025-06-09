import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUserName {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  User,
  LoginByUserName,
  ThunkConfig<string>
>('login/loginByUserName', async (authData, thunkAPI) => {
  const { extra, dispatch, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.post<User>('/login', authData);

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
  }
});
