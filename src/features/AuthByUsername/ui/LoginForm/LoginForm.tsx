import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  loginActions,
  loginReducer,
} from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from 'features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import {
  ReducerList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, username, password]);

  useDynamicModuleLoader({
    reducers: initialReducers,
  });

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />

      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        autoFocus
        title="Логин"
        type="text"
        className={styles.input}
        placeholder={t('Введите username')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        title="Пароль"
        type="text"
        className={styles.input}
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        className={styles.loginBtn}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});

export default LoginForm;
